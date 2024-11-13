(function(){
    document.addEventListener('click',burgerInit)

    function burgerInit(e){
        const burgerInit = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if(!burgerInit && !burgerNavLink ) return
        if(document.documentElement.clientWidth >900) return

        if(!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        }else{
            document.body.classList.remove('body--opened-menu')
        }
    }
const open = document.querySelector('.about__img-button');
const modal = document.querySelector('.modal');

open.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e){
    e.preventDefault()
    document.body.classList.toggle('body-opened--modal')
}
function closeModal(e){
    e.preventDefault()
    const target = e.target;
    if(target.closest('.modal__consel') || target.classList.contains('modal')){
    document.body.classList.remove('body-opened--modal')
    }
}

})()

