function toggleDarkMode() {
    const body = document.querySelector('body');
    const h1 = document.querySelector('.perkenalan');
    const h1_a = document.querySelector('.perkenalan a');
    const h2 = document.querySelector('.add');
    const p = document.querySelector('.desc');
    const p_a = document.querySelector('.desc a');
    const menuLinks = document.querySelectorAll('.nav_link');

    if (body.classList.contains('dark-mode')) {
        // Change to light mode
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
    } else {
        // Change to dark mode
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
    }
}

// Detect based on user's device preference
function applyAutomaticTheme() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const body = document.querySelector('body');
    const themeLink = document.getElementById('theme');
    const h1 = document.querySelector('.perkenalan');
    const h1_a = document.querySelector('.perkenalan a');
    const h2 = document.querySelector('.add');
    const p = document.querySelector('.desc');
    const p_a = document.querySelector('.desc a');
    const menuLinks = document.querySelectorAll('.nav_link');

    if (prefersDarkMode) {
        // Apply dark mode 
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
        themeLink.textContent = 'Theme';
        h1.style.color = 'white';
        h1_a.style.color = 'white';
        h2.style.color = 'white';
        p.style.color = 'white';
        p_a.style.color = 'white';
        menuLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        // Apply light mode
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
        themeLink.textContent = 'Theme';
        h1.style.color = '';
        h1_a.style.color = '';
        h2.style.color = '';
        p.style.color = '';
        p_a.style.color = '';
        menuLinks.forEach(link => {
            link.style.color = '';
        });
    }
}

applyAutomaticTheme();

const projectsLink = document.querySelector('.nav_link[href="#projects"]');
const aboutLink = document.querySelector('.nav_link[href="#about"]');

const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');

function openPopup(content) {
    popupContent.textContent = content;
    popup.style.display = 'block';
}

projectsLink.addEventListener('click', (event) => {
    event.preventDefault();
    openPopup("SOON!");
});

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
    openPopup("SOON!");
});

document.getElementById('closeBtn').addEventListener('click', () => {
    popup.style.display = 'none';
});
