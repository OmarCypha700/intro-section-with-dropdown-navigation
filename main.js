
window.onload =  () => {
    const hamb_menu = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    hamb_menu.addEventListener('click', () => {
        hamb_menu.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}