
// Імпортуємо бібліотеку у файл скрипта
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player("vimeo-player");

// Отримуємо поточний час відтворення з локального сховища або 0, якщо немає даних
const currentTime = localStorage.getItem("videoplayer-current-time") || 0;

// Встановлюємо поточний час відтворення для плеєра
player.setCurrentTime(currentTime);

// Створюємо функцію, яка буде зберігати поточний час відтворення у локальне сховище
const saveCurrentTime = (time) => {
  localStorage.setItem("videoplayer-current-time", time);
};

// Використовуємо throttle для обмеження частоти виклику функції saveCurrentTime
const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

// Відстежуємо подію timeupdate і викликаємо функцію throttledSaveCurrentTime з поточним часом відтворення
player.on("timeupdate", (data) => {
  throttledSaveCurrentTime(data.seconds);
});
