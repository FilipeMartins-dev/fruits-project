const containerStrawberry = document.querySelector('#container-strawberry')
const containerAvocado = document.querySelector('#container-avocado')
const containerOrange = document.querySelector('#container-orange')
const container = document.querySelectorAll('.container')

containerStrawberry.classList.remove('hidden')

const buttonPrevious = document.querySelector('#button-previous')
const buttonNext = document.querySelector('#button-next')

buttonPrevious.addEventListener('click', previousTheme)
buttonNext.addEventListener('click', nextTheme)

const themes = [containerStrawberry, containerAvocado, containerOrange]
const items = document.querySelectorAll('.items')
const strawberryItems = document.querySelectorAll('#container-strawberry .items')
const avocadoItems = document.querySelectorAll('#container-avocado .items')
const orangeItems = document.querySelectorAll('#container-orange .items')

let count = themes.length
let active = 0
console.log('count: '+count)

function previousTheme(){
    const isCountMin = active == 0
    if(isCountMin){
        themes[active].classList.add('hidden')
        active = count - 1
        themes[active].classList.remove('hidden')
        
    } else if(!isCountMin){
        themes[active].classList.add('hidden')
        active--
        themes[active].classList.remove('hidden')
    }

    console.log('previous')
    console.log('active: '+active)

}

function nextTheme(){
    const isCountMax = active == count - 1
    if(isCountMax){
        themes[active].classList.add('hidden')
        active = 0
        themes[0].classList.remove('hidden')

    }
    if(!isCountMax){
        themes[active].classList.add('hidden')
        active++
        themes[active].classList.remove('hidden')
    }

    console.log('next')
    console.log('active: '+active)
}