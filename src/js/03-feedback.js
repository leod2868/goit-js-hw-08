import throttle from 'lodash.throttle';
const refs = {
  form : document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea : document.querySelector('.feedback-form textarea'),
}
const formData = {};
const STORAGE_KEY = 'feedback-form-state'
helloInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle((e) => {

  formData[e.target.name] = e.target.value;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJSON)}, 500));

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
}

function helloInput(e) {
 const saveText = JSON.parse(localStorage.getItem(STORAGE_KEY))
  if (saveText) { refs.input.value = saveText.email || '' , refs.textarea.value = saveText.message || ''}
   
}