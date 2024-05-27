function toggleDarkMode() {
    const body = document.querySelector('body');
    body.style.backgroundColor = body.style.backgroundColor === 'black' ? '#f1ecec' : 'black';
    body.style.color = body.style.color === 'white' ? 'black' : 'white';
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const p = document.querySelector('p');
    const h1_a = document.querySelector('h1 a');
    const p_a = document.querySelector('p a');

    if (body.style.backgroundColor === 'black') {
        h1.style.color = 'white';
        h1_a.style.color = 'white';
        h2.style.color = 'white';
        p.style.color = 'white';
        p_a.style.color = 'white';
        const menuLinks = document.querySelectorAll('.nav_link');
        menuLinks.forEach(link => {
            link.style.color = 'white';
        });
    } 
    else {
        h1.style.color = '';
        h1_a.style.color = '';
        h2.style.color = '';
        p.style.color = '';
        p_a.style.color = '';
        const menuLinks = document.querySelectorAll('.nav_link');
        menuLinks.forEach(link => {
            link.style.color = '#000000';
        });
    }
}
// Get the Projects and About links in the navbar
const projectsLink = document.querySelector('.nav_link[href="#projects"]');
const aboutLink = document.querySelector('.nav_link[href="#about"]');

// Get the pop-up element
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popupContent');

// Function to open the pop-up
function openPopup(content) {
    popupContent.textContent = content;
    popup.style.display = 'block';
}

// Add event listener to the Projects link
projectsLink.addEventListener('click', (event) => {
    // Prevent default link behavior
    event.preventDefault();
    // Open the pop-up with Projects content
    openPopup("SOON!");
});

// Add event listener to the About link
aboutLink.addEventListener('click', (event) => {
    // Prevent default link behavior
    event.preventDefault();
    // Open the pop-up with About content
    openPopup("SOON!");
});

// Close the pop-up when the close button is clicked
document.getElementById('closeBtn').addEventListener('click', () => {
    popup.style.display = 'none';
});
