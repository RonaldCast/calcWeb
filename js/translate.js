'use strict'
/**Transform: transition about container history */
let viewhistory = document.getElementById('viewhistory')
let calcHistory  = document.querySelector('.calc-history')

function showHistory(){
    calcHistory.classList.toggle("calc-history--translate-none")
    calcHistory.classList.toggle("calc-history--translate-block")
}
viewhistory.addEventListener('click', showHistory)