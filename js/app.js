// Constants
import * as sillyGooseAudio from "./audio.js"
import { story } from "./story.js"

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

const buttons = document.querySelectorAll('button')

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

// Event listeners
btnOne.addEventListener('click', () => {toNewPage(pgTwo)})
btnTwo.addEventListener('click',() => {toNewPage(pgThree)})
btnThree.addEventListener('click',() => {toNewPage(pgFive)}) 
btnFour.addEventListener('click',() => {toNewPage(pgFour, sillyGooseAudio.playSadTrombone())}) 
btnFive.addEventListener('click',() => {toNewPage(pgOne)}) 
btnSix.addEventListener('click',() => {toNewPage(pgSix)}) 
btnSeven.addEventListener('click',() => {toNewPage(pgSeven, sillyGooseAudio.playManSaysHey())}) 
btnEight.addEventListener('click',() => {toNewPage(pgFour, sillyGooseAudio.playSadTrombone())}) 
btnNine.addEventListener('click',() => {toNewPage(pgSix)}) 
btnTen.addEventListener('click',() => {toNewPage(pgEight, sillyGooseAudio.playElevatorMusic())}) 
btnElvn.addEventListener('click',() => {toNewPage(pgFive)}) 


// Functions
const pages = [pgOne, pgTwo, pgThree, pgFour, pgFive, pgSix, pgSeven, pgEight, pgNine]

buttons.forEach(button => {
button.addEventListener('click', sillyGooseAudio.playduckQuack)
})


function toNewPage(location, sound) {
    pages.forEach(page => {
        if(page.classList.contains('active')) {
            page.classList.remove('active')
            page.classList.add('hidden')
        } else if (page === location) {
            page.classList.remove('hidden')
            page.classList.add('active')
        }
    })
    sound
}

function addStoryParagraph(storyText, idName, location) {
    const newParagraph = document.createElement('p')
    newParagraph.innerHTML = storyText
    newParagraph.setAttribute('class', 'story-paragraph')
    newParagraph.setAttribute('id', idName)
    location.append(newParagraph)
}

addStoryParagraph(story.pageTwo[0], 'pg-two-txt-1', pgTwo)
addStoryParagraph(story.pageTwo[1], 'pg-two-txt-2', pgTwo)
addStoryParagraph(story.pageThree[0], 'pg-three-txt-1', pgThree)
addStoryParagraph(story.pageThree[1], 'pg-three-txt-2', pgThree)
addStoryParagraph(story.pageFive[0], 'pg-five-txt-1', pgFive)
addStoryParagraph(story.pageSix[0], 'pg-six-txt-1', pgSix)
addStoryParagraph(story.pageSix[1], 'pg-six-txt-2', pgSix)
addStoryParagraph(story.pageSeven[0], 'pg-seven-txt-1', pgSeven)
addStoryParagraph(story.pageSeven[1], 'pg-seven-txt-2', pgSeven)
addStoryParagraph(story.pageSeven[2], 'pg-seven-txt-3', pgSeven)
addStoryParagraph(story.pageEight[0], 'pg-eight-txt-1', pgEight)
addStoryParagraph(story.pageEight[1], 'pg-eight-txt-2', pgEight)

// add a timed entry function? for some of the story elements?
