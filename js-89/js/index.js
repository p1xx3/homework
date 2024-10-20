const button = document.querySelector('.button');
let btnRed = false
button.addEventListener('click', function () {
    if (btnRed) {
        button.style.backgroundColor = 'white';
        btnRed = false
    } else {
        button.style.backgroundColor = 'red';
        btnRed = true;
    }
})

const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const p = document.querySelector('p');
const btnMove = document.querySelector('.btn-move')

btn.addEventListener('click', function () {
    text.classList.toggle('red')
})
btnMove.addEventListener('click', function () {
    text.classList.toggle('move')
    if(text.classList.contains('move')){
        text.textContent = 'Я двигаюсь'
    }else{
        text.innerHTML = 'О неееет я остановливаюсь'
    }
})