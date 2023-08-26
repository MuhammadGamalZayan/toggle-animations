const colorToggle = document.getElementById('colorToggle');
const container = document.querySelector('.banner');
const card_container = document.querySelector('.card-container');
const last_section = document.querySelector('.last-section');

colorToggle.addEventListener('change', () => {
    if (colorToggle.checked) {
        container.style.backgroundColor = 'black';
        card_container.style.backgroundColor = 'black';
        last_section.style.backgroundColor = 'black';
        container.classList.add('test');

    } else {
        container.style.backgroundColor = 'white';
        card_container.style.backgroundColor = 'white';
        last_section.style.backgroundColor = 'white';
        container.classList.remove('test');
    }
});


const X = () => {
    const menu = document.querySelector('.bar');
    const nav = document.querySelector('.menu');
    
    menu.addEventListener('click', () => {
       menu.classList.toggle('bar-active');
        nav.classList.toggle('nav-active');
    });
}
X();


