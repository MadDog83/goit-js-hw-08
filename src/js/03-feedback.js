import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let formData = {};

// Завантажує дані з локального сховища і заповнює поля форми
function populateFormFields() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    for (const [name, value] of Object.entries(formData)) {
      form.elements[name].value = value;
    }
  }
}

// Зберігає дані форми в локальне сховище
const saveFormData = e => {
  formData = {...formData, [e.target.name]: e.target.value};
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Очищує дані форми і локальне сховище
const clearFormData = () => {
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// Викликає функцію populateFormFields при завантаженні сторінки
populateFormFields();

// Додає обробники подій для введення і відправлення форми
form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(formData);
  clearFormData();
});
