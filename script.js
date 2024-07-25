document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.classList.add('no-transition');

    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'true') {
        applyDarkMode(false);
    } else {
        applyLightMode(false);
    }

    setTimeout(() => {
        body.classList.remove('no-transition');
    }, 0);
});

function toggleDarkMode() {
    const body = document.querySelector('body');
    if (body.classList.contains('dark-mode')) {
        applyLightMode(true);
    } else {
        applyDarkMode(true);
    }
}

function applyDarkMode(withTransition) {
    const body = document.querySelector('body');
    const h1 = document.querySelector('.perkenalan');
    const h1_a = document.querySelector('.perkenalan a');
    const h2 = document.querySelector('.add');
    const p = document.querySelector('.desc');
    const p_a = document.querySelector('.desc a');
    const menuLinks = document.querySelectorAll('.nav_link');

    if (!withTransition) body.classList.add('no-transition');

    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
    document.getElementById('theme').textContent = 'Theme';
    h1.style.color = 'white';
    h1_a.style.color = 'white';
    h2.style.color = 'white';
    p.style.color = 'white';
    p_a.style.color = 'white';
    menuLinks.forEach(link => {
        link.style.color = 'white';
    });

    if (!withTransition) setTimeout(() => body.classList.remove('no-transition'), 0);
}

function applyLightMode(withTransition) {
    const body = document.querySelector('body');
    const h1 = document.querySelector('.perkenalan');
    const h1_a = document.querySelector('.perkenalan a');
    const h2 = document.querySelector('.add');
    const p = document.querySelector('.desc');
    const p_a = document.querySelector('.desc a');
    const menuLinks = document.querySelectorAll('.nav_link');

    if (!withTransition) body.classList.add('no-transition');

    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
    document.getElementById('theme').textContent = 'Theme';
    h1.style.color = '';
    h1_a.style.color = '';
    h2.style.color = '';
    p.style.color = '';
    p_a.style.color = '';
    menuLinks.forEach(link => {
        link.style.color = '';
    });

    if (!withTransition) setTimeout(() => body.classList.remove('no-transition'), 0);
}
