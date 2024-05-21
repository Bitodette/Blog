function toggleDarkMode() {
    const body = document.querySelector('body');
    body.style.backgroundColor = body.style.backgroundColor === 'black' ? 'white' : 'black';
    body.style.color = body.style.color === 'white' ? 'black' : 'white';
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const p = document.querySelector('p');

    if (body.style.backgroundColor === 'black') {
        h1.style.color = 'white';
        h2.style.color = 'white';
        p.style.color = 'white';
        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        h1.style.color = '';
        h2.style.color = '';
        p.style.color = '';
        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.style.color = '#837575';
        });
    }
}