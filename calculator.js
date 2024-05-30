'use strict'
let display = document.getElementById("input")
let operator = document.getElementsByClassName('operator')
function clickToDisplay(input) {
    display.value += input
}
function clickToClearAll(){
    display.value = ''
}
function calculate(){
    display.value = eval(display.value)
}
