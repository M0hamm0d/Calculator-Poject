'use strict'
const display = document.getElementById("input");
const outputDisplay = document.getElementById("outputDisplay");
function clickToDisplay(input) {
    display.value += input
}
function clickToClearAll(){
    display.value = '';
    outputDisplay.value = ''
}
function calculate(){
    outputDisplay.value = eval(display.value);
    display.value = 0
}
