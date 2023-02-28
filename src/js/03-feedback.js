var throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageTextarea = feedbackForm.querySelector('textarea[name="message"]');

const FEEDBACK_FORM = 'feedback-form-state';
// збереження стану форми у локальне сховище
const saveFormStateToLocalStorage = () => {
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formState));
};

//відновлення стану форми зі сховища
const restoreFormStateFromLocalStorage = () => {
  const formStateJson = localStorage.getItem(FEEDBACK_FORM);
  if (formStateJson) {
    const formState = JSON.parse(formStateJson);
    emailInput.value = formState.email;
    messageTextarea.value = formState.message;
  }
};

// Відновлення стану форми під час завантаження сторінки
document.addEventListener('DOMContentLoaded', restoreFormStateFromLocalStorage);

// Збереження стану форми у локальне сховище при введенні даних у поля
const throttledSaveFormStateToLocalStorage = _.throttle(saveFormStateToLocalStorage, 500);
feedbackForm.addEventListener('input', throttledSaveFormStateToLocalStorage);

// Очищення форми та сховища при сабміті форми
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Очищення полів форми
  emailInput.value = '';
  messageTextarea.value = '';

  // Виведення email та message та їхніми значеннями у консоль
  const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  console.log(formState);

  // Очищення
  localStorage.removeItem(FEEDBACK_FORM);
});
