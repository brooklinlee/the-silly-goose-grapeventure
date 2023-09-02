// PSEUDO-CODE
/* 
define an init() function that will at page initialization make sure that only page one's class is active and the rest are set to hidden

*/
// Constants
import * as sillyGooseAudio from "./audio.js"
import { story } from "./story.js"

// console.log(story.pageTwo[0])

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
btnOne.addEventListener('click', () => {toNewPage(pgTwo)})
btnTwo.addEventListener('click',() => {toNewPage(pgThree)})
btnThree.addEventListener('click',() => {toNewPage(pgFive)}) 
btnFour.addEventListener('click',() => {toNewPage(pgFour)}) 
btnFive.addEventListener('click',() => {toNewPage(pgOne)}) 
btnSix.addEventListener('click',() => {toNewPage(pgSix)}) 
btnSeven.addEventListener('click',() => {toNewPage(pgSeven)}) 
btnEight.addEventListener('click',() => {toNewPage(pgFour)}) 
btnNine.addEventListener('click',() => {toNewPage(pgSix)}) 
btnTen.addEventListener('click',() => {toNewPage(pgEight)}) 
btnElvn.addEventListener('click',() => {toNewPage(pgNine)}) 
btnTwlv.addEventListener('click',() => {toNewPage(pgFive)}) 

buttons.forEach(button => {
    button.addEventListener('click', sillyGooseAudio.playduckQuack)
})

// Functions

// Create an array of the locations of each 'page' (div) in HTML
const pages = [pgOne, pgTwo, pgThree, pgFour, pgFive, pgSix, pgSeven, pgEight, pgNine]
// console.log(pages[0])

// Change this to DRY code, rewrite these so that there are parameters to replace and condence all of these individual functions to one function
function toNewPage(parameter) {
    pages.forEach(page => {
        if(page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === parameter) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
}

// function toPgOne(){
//     pages.forEach(page => {
//     if (page.classList.contains('active')) {
//         page.classList.remove('active')
//         page.classList.add('hidden')
//     } else if (page === pgOne) {
//         page.classList.remove('hidden')
//         page.classList.add('active')
//     }
// })
// }



// functions to add storyline to div of each page, add an id element to each 
function addStoryParagraph(storyText, idName, location) {
    const newParagraph = document.createElement('p')
    newParagraph.innerText = storyText
    newParagraph.setAttribute('class', 'story-paragraph')
    newParagraph.setAttribute('id', idName)
    location.append(newParagraph)
}

addStoryParagraph(story.pageOne[0], 'page-one-text', pgOne)

// const newParagraph = document.createElement('p')
// newParagraph.innerText = story.pageOne[0]
// newParagraph.setAttribute('class', 'story-paragraph')
// newParagraph.setAttribute('id', 'page-one-text-1')
// pgOne.append(newParagraph)

// add a timed entry function? for some of the story elements?