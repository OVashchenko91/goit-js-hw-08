import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[type="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

const STORAGE_INPUT_KEY = 'feedback-form-state';
//Коли користувач вводить інформацію у форму, функція викликається із затримкою 500 мс за допомогою бібліотеки 
function onInput(e) { // функція зберігає дані, введені користувачем, у локальному сховищі під ключем 
  const userDetails = JSON.parse(localStorage.getItem(STORAGE_INPUT_KEY)) || {};
  console.log(userDetails);
  userDetails[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_INPUT_KEY, JSON.stringify(userDetails));
}

const saveLocalItems = localStorage.getItem(STORAGE_INPUT_KEY);
const parsSaveLocalItems = JSON.parse(saveLocalItems);

function getLocalStorageItems() { //функція перевіряє, чи є збережені дані в локальному сховищі, і якщо так, то встановлює значення полів введення на збережені значення.
  if (saveLocalItems) {
    !parsSaveLocalItems.email
      ? ''
      : (refs.email.value = parsSaveLocalItems.email);
    !parsSaveLocalItems.message
      ? ''
      : (refs.message.value = parsSaveLocalItems.message);
  }
}

getLocalStorageItems();

function onFormSubmit(e) {//перевіряє чи внесені поля, якщо ні виводить повідомлення
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Введіть всі поля форми!');
  }

  const formElDetails = { email: email.value, message: message.value };
  console.log(formElDetails);

  e.currentTarget.reset();

  removeStorageItems(); 


}
function removeStorageItems() { // функція, яка видаляє збережені дані з локального сховища.
  localStorage.removeItem(STORAGE_INPUT_KEY);
}