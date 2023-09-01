// PSEUDO-CODE
/* 
// Cached element references of each 'page' in HTML
// Create an array of the locations of each 'page' (div) in HTML

// Give each page a class of either 'active' or 'hidden'. Hidden classes will be given a CSS property of .hidden{display:none;}.

Use event listeners on each button where 'click' has a function associated with it that will change the class of the targeted div from hidden to active or vice versa as necessary

define a function for each page movement that will change all of the pages elements to hidden, then change the targeted page's class to active

define an init() function that will at page initialization make sure that only page one's class is active and the rest are set to hidden

*/
// Variables

// Cached element references

// Cached element references of each 'page' in HTML
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

// Cached element references of each button in HTML
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
btnOne.addEventListener('click',function(){})
btnTwo.addEventListener('click',function(){})
btnThree.addEventListener('click',function(){})
btnFour.addEventListener('click',function(){})
btnFive.addEventListener('click',function(){})
btnSix.addEventListener('click',function(){})
btnSeven.addEventListener('click',function(){})
btnEight.addEventListener('click',function(){})
btnNine.addEventListener('click',function(){})
btnTen.addEventListener('click',function(){})
btnElvn.addEventListener('click',function(){})
btnTwlv.addEventListener('click',function(){})



// Functions

// Create an array of the locations of each 'page' (div) in HTML
const pages = [pgOne, pgTwo, pgThree, pgFour, pgFive, pgSix, pgSeven, pgEight, pgNine]

function toPgTwo(){
    // remove class lists
    // if page === pgOne
    // change class list to 'active
    // else change class list to 'hidden'
    // Use a terenary? SYNTAX: condition ? expressionIfTrue : expressionIfFalse;
    // 
}

function toPgOne(){
    }


pgOne.classList





function toPgThree(){}
function toPgThree(){}
function toPgFour(){}
function toPgFive(){}
function toPgSix(){}
function toPgSeven(){}
function toPgEight(){}
function toPgNine(){}
