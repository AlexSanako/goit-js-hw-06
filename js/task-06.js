const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  const inputLength = inputEl.value.length;
  const dataLength = inputEl.getAttribute('data-length');

  if (inputLength === Number(dataLength)) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
