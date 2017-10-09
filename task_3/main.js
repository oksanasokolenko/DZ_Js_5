var input = document.querySelector('[data-input]'),
    out = document.getElementById('out');

input.addEventListener('keyup', onKeyUp);

function onKeyUp(e) {

    if (e.key === 'Enter') {
        out.innerHTML = trimURL(input.value);
    }

}

function trimURL(url) {

    url = url.replace('http://', '').replace('https://', '');

    // url = url.replace(/http:\/\/|https:\/\//, '');

    // var index = url.indexOf('//') + 2;
    // url = url.slice(index !== 1 ? index : 0);
    return url;


}