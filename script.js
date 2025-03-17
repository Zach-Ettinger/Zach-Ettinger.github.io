const splash = document.querySelector('.splash');
const main = document.querySelector('.main');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', (e) => {
    if (!sessionStorage.getItem('splashShown')) {
        setTimeout(() => {
            splash.classList.add('display-none');
            main.classList.add('display-all');
            body.classList.add('display-all');
        }, 2000);
        
        sessionStorage.setItem('splashShown', 'true');
    } else {
        splash.classList.add('display-none');
        main.classList.add('display-all');
        body.classList.add('display-all');
    }
});