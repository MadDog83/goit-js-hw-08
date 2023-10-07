import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {};

// Завантажуємо дані з локального сховища і заповнює поля форми
function populateFormFields() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    for (const [name, value] of Object.entries(formData)) {
      form.elements[name].value = value;
    }
  }
}

// Зберігаємо дані форми в локальне сховище
const saveFormData = e => {
  formData = {...formData, [e.target.name]: e.target.value};
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Очищуємо дані форми і локальне сховище
const clearFormData = () => {
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

// Перевірка, чи заповнені два поля форми
const isFormValid = () => {
    const values = Object.values(formData);
    return values.length >= 2 && values.every(value => value !== '');
  }

// Викликаємо функцію populateFormFields при завантаженні сторінки
populateFormFields();

// Додаємо обробники подій для введення і відправлення форми
form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', e => {
  e.preventDefault();
  // Відправляємо форму тільки якщо вона валідна
  if (isFormValid()) {
    console.log(formData);
    clearFormData();
  } else {
    alert('Будь ласка, заповніть принаймні два поля форми');
  }
});
