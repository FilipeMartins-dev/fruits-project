import { body, containerStrawberry, containerAvocado, containerOrange, buttonPrevious, buttonNext, themes } from "./components.mjs";

containerStrawberry.classList.remove('hidden')

export function checkButton(event){
    // console.log(event)

    switch(event.key){
        case 'ArrowLeft':
            previousTheme()
            break;
        case 'ArrowRight':
            nextTheme()
            break;
    }
}

let count = themes.length
let active = 0
console.log('count: '+count)

export function previousTheme(){
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

export function nextTheme(){
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

// Codigo véio
// const items = document.querySelectorAll('.items')
// const strawberryItems = document.querySelectorAll('#container-strawberry .items')
// const avocadoItems = document.querySelectorAll('#container-avocado .items')
// const orangeItems = document.querySelectorAll('#container-orange .items')
