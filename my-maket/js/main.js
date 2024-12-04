(function () {
    // Модалка
    const open = document.querySelector('.sing-up');
    const modal = document.querySelector('.modal');

    open.addEventListener('click', openModal);
    modal.addEventListener('click', closeModal);

    function openModal(e) {
        e.preventDefault();
        document.body.classList.toggle('body-opened--modal');
    }

    function closeModal(e) {
        e.preventDefault();
        const target = e.target;
        if (target.closest('.modal__closed') || target.classList.contains('modal')) {
            document.body.classList.remove('body-opened--modal');
        }
    }
    // бургер
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerInit = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerInit && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Меню языков
    const languageNav = document.querySelector('.language-nav');
    const dropContentOpen = languageNav.parentElement;

    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('language-nav')) {
            dropContentOpen.classList.toggle('language-active');
        } else {
            dropContentOpen.classList.remove('language-active');
        }
    });
    // свайпер-мест

    new Swiper('.selling__slider', {

        spaceBetween: -5,
        slidesPerView: .9,
        centeredSlides: false,

        navigation: {
            nextEl: '.selling-button-next',
            prevEl: '.selling-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            1001: {
                slidesPerView: 3
            },
            901: {
                slidesPerView: 2,
                spaceBetween:5
            },
        },
    });
    

new Swiper(".testimonials__swiper", {
    effect: "cards",
    grabCursor: true,
    slidesPerView: 1,
    slideShadows: false,
    shadow:false,
    pagination: {

        el: '.testimonials__pagination',
        clickable: true,
    },


    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});
}) ();