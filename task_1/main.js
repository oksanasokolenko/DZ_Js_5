var input = document.querySelector('[data-input]'),
    out = document.getElementById('out');



input.addEventListener('keyup', onKeyUp);

function onKeyUp(e) {

    if (e.key === 'Enter') {
        out.innerHTML = strLenght(input.value);
}

}

function strLenght(str) {

    str = str.length;


    return str;


}