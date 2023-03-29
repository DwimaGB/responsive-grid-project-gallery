
const navToggleBtn =  document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggleBtn.addEventListener('click', ()=>{
    const isVisible = primaryNav.getAttribute('data-visible');

    if(isVisible == 'true'){
        primaryNav.setAttribute('data-visible', 'false');
        navToggleBtn.setAttribute('aria-expanded', 'false');
    }
    else{
        primaryNav.setAttribute('data-visible', 'true');
        navToggleBtn.setAttribute('aria-expanded', 'true');
    }
})
