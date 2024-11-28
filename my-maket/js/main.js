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
        
        paceBetween: 10,
        slidesPerView: 2,
        centeredSlides: true,

        navigation: {
            nextEl: '.selling-button-next',
            prevEl: '.selling-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable:true,
        },
    });
})();