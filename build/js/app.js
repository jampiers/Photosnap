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


// Pricing
const pricingBoton = document.querySelector('.pricing__boton');
const monthlyPrice = document.querySelectorAll('.card-p__monthly');
const yearlyPrice = document.querySelectorAll('.card-p__yearly');
const per = document.querySelectorAll('.card-p__month');
const monthly = document.querySelector('.pricing__monthly');
const yearly = document.querySelector('.pricing__yearly');

pricingBoton.addEventListener('change', () => {
    if(pricingBoton.checked) {
        monthlyPrice.forEach( month => month.setAttribute('hidden', true));
        yearlyPrice.forEach( month => month.removeAttribute('hidden'));
        per.forEach( e => e.innerHTML = 'per yearly');
        monthly.classList.remove('pricing--activo');
        yearly.classList.add('pricing--activo');
    } else {
        monthlyPrice.forEach( month => month.removeAttribute('hidden'));
        yearlyPrice.forEach( month => month.setAttribute('hidden', true));
        per.forEach( e => e.innerHTML = 'per month');
        monthly.classList.add('pricing--activo');
        yearly.classList.remove('pricing--activo');
    }
});
