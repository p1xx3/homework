(function () {
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
    // модалка 
    const open = document.querySelector('.about__img-button');
    const modal = document.querySelector('.modal');

    open.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body-opened--modal')
    }
    function closeModal(e) {
        e.preventDefault()
        const target = e.target;
        if (target.closest('.modal__consel') || target.classList.contains('modal')) {
            document.body.classList.remove('body-opened--modal')
        }
    }
    //  Табы
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggletab)

    function toggletab(e) {
        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return
        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControls = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }
        if (activeControls) {
            activeControls.classList.remove('tab-controls__link--active')
        }

        tabContent.classList.add('tab-content--show')
        tabControl.classList.add('tab-controls__link--active')
    }
    // аккардион  
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });
    });

    // слайдер-галлерея

    new Swiper('.gallary__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,
        // If we need pagination
        pagination: {
            el: '.gallary__pagination',
            type: 'fraction'
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallary__next',
            prevEl: '.gallary__prev',
        },
        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });
    // слайдер-отзывы

    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            901: {
                slidesPerView:1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }

    });
})()

