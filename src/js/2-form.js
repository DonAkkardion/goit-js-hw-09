const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handlerLogin);

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

function handleInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  formData.email = email.trim();
  formData.message = message.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function handlerLogin(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    return console.log('Fill please all fields');
  } else {
    console.log(formData);
    formData = {
      email: '',
      message: '',
    };
    localStorage.removeItem(localStorageKey);

    form.reset();
  }
}
