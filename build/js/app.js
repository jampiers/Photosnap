const barra = document.querySelector('.contenido-nav');
const btn = document.querySelector('.header__burger-btn');
const overlay = document.querySelector('.header__overlay');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    const visible = barra.getAttribute('data-visible');

    if(visible === 'false') {
        barra.setAttribute('data-visible', true);
        overlay.classList.add('activo');
        btn.setAttribute('aria-expanded', true);
        body.setAttribute('data-scroll', false);
    } else {
        barra.setAttribute('data-visible', false);
        overlay.classList.remove('activo');
        btn.setAttribute('aria-expanded', false);
        body.setAttribute('data-scroll', true);
    }
});