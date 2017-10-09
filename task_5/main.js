var form = document.getElementById('register');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();

    // trim whitespaces
    var inputs = document.querySelectorAll('input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = inputs[i].value.trim();
    }

    // check password length & email
    var passw = document.querySelector('#register [name="password"]'),
        email = document.querySelector('#register [name="email"]'),
        error = document.getElementById('error');

    console.log(passw.value.length);
    if (passw.value.length <= 5) {
        error.innerHTML = 'Пароль должен быть > 5';
        return false;
    }

    if (email.value.indexOf(' ') !== -1) {
        error.innerHTML = 'Email содержит пробелы';
        return false;
    }

    if (email.value.split('@').length !== 2 && email.value.indexOf('.') !== -1 ) {
        error.innerHTML = 'Email содержит 0 или больше 2-х собак';
        return false;
    }

    error.innerHTML = 'Form is valid';
    return true;

}