import throttle from 'lodash.throttle';
const refs = {
  form : document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea : document.querySelector('.feedback-form textarea'),
}
const formData = {};
const KEY = 'feedback-form-state'
helloInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input',throttle((e) => {

    formData[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData))
}, 500));

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(KEY);
}

function helloInput(e) {
 const saveText =JSON.parse(localStorage.getItem(KEY))
  if (saveText) { formData.email = saveText.email ||'' , formData.message = saveText.message ||''}
   
}