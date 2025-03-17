const splash = document.querySelector('.splash');
const main = document.querySelector('.main');
const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', (e) => {
    // Check if splash has been shown in this session
    if (!sessionStorage.getItem('splashShown')) {
        // Show splash screen
        setTimeout(() => {
            splash.classList.add('display-none');
            main.classList.add('display-all');
            body.classList.add('display-all');
        }, 2000);
        
        // Set the flag in sessionStorage
        sessionStorage.setItem('splashShown', 'true');
    } else {
        // Skip splash screen if already shown in this session
        splash.classList.add('display-none');
        main.classList.add('display-all');
        body.classList.add('display-all');
    }
});