var button = document.getElementById('push'),
    out = document.getElementById('out');

button.addEventListener('click', onKeyUp);


function onKeyUp() {

    out.innerHTML = getImages(5).map(function (el) {
        return el.outerHTML;
    }).join('');

    // var a = getImages(5);
    //
    // for (var i = 0; i < a.length; i++) {
    //     out.appendChild(a[i]);
    // }

}

var a = [];

function getImages(n) {

    var image, array = [];

    for (var i = 1; i <= n; i++) {

        image = new Image();

        image.src = "img/" + i + ".png";

        array.push(image);

    }

    return array;

}

