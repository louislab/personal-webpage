window.addEventListener('scroll', (e) => {
    // blur on scroll
    const header = document.querySelector('.header');
    const scroll = window.scrollY;
    const blur = scroll / 100;
    header.style.filter = `blur(${blur}px)`;
    
    const content = document.querySelector('#content');
    content.classList.remove('poping');
})
