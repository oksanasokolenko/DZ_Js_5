
var input = document.querySelector('input'),
    button = document.getElementById('check'),
    out = document.getElementById('out');

button.addEventListener('click', onCheck);

function onCheck() {
    out.innerHTML = charCodeAt(checkInput(input.value));

}

function checkInput() {
    if (input !== NaN) {
        return true
    } else {
        return false
    }
}



var input = document.querySelector('input'),
    button = document.getElementById('check'),
    out = document.getElementById('out');

button.addEventListener('click', onCheck);

function onCheck() {
    out.innerHTML = checkInput(input.value);

}

function checkInput(string) {
    return string.charCodeAt(0);


}













