const containerStrawberry = document.querySelector('#container-strawberry')
const containerAvocado = document.querySelector('#container-avocado')
const containerOrange = document.querySelector('#container-orange')
const container = document.querySelectorAll('.container')

containerStrawberry.classList.remove('hidden')

const buttonPrevious = document.querySelector('#button-previous')
const buttonNext = document.querySelector('#button-next')

buttonPrevious.addEventListener('click', previousTheme)
buttonNext.addEventListener('click', nextTheme)

const themes = ['strawberry', 'avocado', 'orange']
let count = 0
function previousTheme(){
    

    console.log('previous')
}
function nextTheme(){
    console.log('next')
}