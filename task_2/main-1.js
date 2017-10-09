var button = document.getElementById('push'),
    out = document.getElementById('out');

var a = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png'
];

button.addEventListener('click', onKeyUp);

function onKeyUp() {

    out.innerHTML = getImages(a);

}

function getImages(a) {

    var s = '';

    for (var i = 0; i < a.length; i++) {
        s += '<img src="'+ a[i] + '">';
    }

    return s;

}

