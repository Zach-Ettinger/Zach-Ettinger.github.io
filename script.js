const splash = document.querySelector('.splash');
const main = document.querySelector('.main');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        main.classList.add('display-all');
    }, 2000);
});