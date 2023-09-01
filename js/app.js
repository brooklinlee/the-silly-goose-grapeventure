// PSEUDO-CODE
/* 
define an init() function that will at page initialization make sure that only page one's class is active and the rest are set to hidden

*/
// Constants
import * as sillyGooseAudio from "./audio.js"

// Variables

// Cached element references

const pgOne = document.getElementById('pg1')
const pgTwo = document.getElementById('pg2')
const pgThree = document.getElementById('pg3')
const pgFour = document.getElementById('pg4')
const pgFive = document.getElementById('pg5')
const pgSix = document.getElementById('pg6')
const pgSeven = document.getElementById('pg7')
const pgEight = document.getElementById('pg8')
const pgNine = document.getElementById('pg9')
// console.log(pgNine)

const buttons = document.querySelectorAll('button')
// console.log(buttons)

const btnOne = document.getElementById('pg-1-opt-1')
const btnTwo = document.getElementById('pg-2-opt-1')
const btnThree = document.getElementById('pg-2-opt-2')
const btnFour = document.getElementById('pg-3-opt-1')
const btnFive = document.getElementById('pg-4-opt-1')
const btnSix = document.getElementById('pg-5-opt-1')
const btnSeven = document.getElementById('pg-5-opt-2')
const btnEight = document.getElementById('pg-6-opt-1')
const btnNine = document.getElementById('pg-7-opt-1')
const btnTen = document.getElementById('pg-7-opt-2')
const btnElvn = document.getElementById('pg-8-opt-1')
const btnTwlv = document.getElementById('pg-9-opt-1')
// console.log(btnTwlv)

// Event listeners
// Use event listeners on each button where 'click' has a function associated with it that will change the class of the targeted div from hidden to active or vice versa as necessary
btnOne.addEventListener('click',toPgTwo)
btnTwo.addEventListener('click',toPgThree)
btnThree.addEventListener('click',toPgFive)
btnFour.addEventListener('click',toPgFour)
btnFive.addEventListener('click',toPgOne)
btnSix.addEventListener('click',toPgSix)
btnSeven.addEventListener('click',toPgSeven)
btnEight.addEventListener('click',toPgFour)
btnNine.addEventListener('click',toPgSix)
btnTen.addEventListener('click',toPgEight)
btnElvn.addEventListener('click',toPgNine)
btnTwlv.addEventListener('click',toPgFive)

buttons.forEach(button => {
    button.addEventListener('click', sillyGooseAudio.playduckQuack)
})

// event listener on buttons clicked to play duckQuack audio



// Functions

// Create an array of the locations of each 'page' (div) in HTML
const pages = [pgOne, pgTwo, pgThree, pgFour, pgFive, pgSix, pgSeven, pgEight, pgNine]
// console.log(pages[0])

// Functions that change the class of any 'active' pages to 'hidden', and remove the 'hidden' class from the respective page that we are trying to show and adding an 'active' class to that page
function toPgOne(){
    pages.forEach(page => {
    if (page.classList.contains('active')) {
        page.classList.remove('active')
        page.classList.add('hidden')
    } else if (page === pgOne) {
        page.classList.remove('hidden')
        page.classList.add('active')
    }
})
}

function toPgTwo(){
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === pgTwo) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
}

function toPgThree(){
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === pgThree) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
}

function toPgFour(){
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === pgFour) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
}

function toPgFive(){
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === pgFive) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
}

function toPgSix(){
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === pgSix) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
}

function toPgSeven(){
    pages.forEach( page => {
    if (page.classList.contains('active')) {
        page.classList.remove('active')
        page.classList.add('hidden')
    } else if (page === pgSeven) {
        page.classList.remove('hidden')
        page.classList.add('active')
    }
})
}

function toPgEight(){
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === pgEight) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
}
function toPgNine(){
    pages.forEach(page => {
        if (page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === pgNine) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
}
