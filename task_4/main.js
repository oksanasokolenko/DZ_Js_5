var input = document.querySelector('[data-input]'),
    out=document.getElementById('out');

input.addEventListener('keyup', onKeyUp);

function onKeyUp(e) {

    if (e.key === 'Enter') {
        out.innerHTML= trimURL(input.value);
    }

}

function trimURL(url) {



    url = url.split('//')[1].replace('www.', '');

    return url;


}