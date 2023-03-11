
const refs = {
  form : document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea : document.querySelector('.feedback-form textarea'),
}
const formData = {};
const KEY = 'feedback-form-state'
helloInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', e => {

    formData[e.target.name] = e.target.value;
    localStorage.setItem(KEY, JSON.stringify(formData))
});

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(KEY);
}

function helloInput(e) {
 const saveText =JSON.parse(localStorage.getItem(KEY))
 
}