const btn = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const body = document.body 

const closeModal = function(){
    modal.classList.toggle('modal-open')
    body.classList.remove('body-fixed')
}

const openModal = function(){
    modal.classList.add('modal-open')
    body.classList.add('body-fixed')
}

btn.addEventListener('click', openModal)

modal.addEventListener('click', function (event) {
    const target = event.target
    if(target && target.classList.contains('modal-open') || target.classList.contains('modal__close-btn')){
        closeModal()
    }
})

document.addEventListener('keydown', function(event){
    if(event.code==='Escape' && modal.classList.contains('modal-open')){
        closeModal()
    }
})