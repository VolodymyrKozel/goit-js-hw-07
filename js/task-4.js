const formA = document.querySelector('.login-form');
formA.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    email: password,
    password: password,
  };
  console.log(formData);
  form.reset();
}
