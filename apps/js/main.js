/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        document.body.style.overflow = 'hidden' // جلوگیری از اسکرول هنگام باز بودن منو
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        document.body.style.overflow = 'auto' // فعال کردن مجدد اسکرول
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show-menu')
    document.body.style.overflow = 'auto' // فعال کردن مجدد اسکرول
}

navLinks.forEach(n => n.addEventListener('click', (e) => {
    // جلوگیری از رفتار پیشفرض برای لینک‌های هش
    if (n.getAttribute('href') === '#') {
        e.preventDefault();
    }
    linkAction();
}))

// بستن منو با کلیک خارج از آن
document.addEventListener('click', (e) => {
    const isMenuOpen = navMenu.classList.contains('show-menu');
    const isToggleButton = e.target.closest('#nav-toggle');
    const isMenuContent = e.target.closest('#nav-menu');

    if (isMenuOpen && !isMenuContent && !isToggleButton) {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = 'auto';
    }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.add('active-link')
        } else {
            document.querySelector(`.nav__menu a[href*="${sectionId}"]`).classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`, {delay: 600})
sr.reveal(`.home__footer`, {delay: 700})
sr.reveal(`.home__img`, {delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, {
    origin: 'top', 
    interval: 100
})
sr.reveal(`.specs__data, .discount__animate`, {
    origin: 'right', // تغییر از left به right برای راست‌چین
    interval: 100
})
sr.reveal(`.specs__img, .discount__img`, {
    origin: 'left' // تغییر از right به left برای راست‌چین
})
sr.reveal(`.case__img`, {origin: 'top'})
sr.reveal(`.case__data`)
