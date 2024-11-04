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
})()

