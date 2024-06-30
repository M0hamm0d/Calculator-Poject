'use strict'
// const display = document.getElementById("input");
// const outputDisplay = document.getElementById("outputDisplay");
const display = document.querySelector(".input-in");
const outputDisplay = document.querySelector(".input-out");
// function clickToDisplay(input) {
//     display.value += input
// }
function clickToDisplay(input) {
    display.innerHTML += input
}
// function clickToClearAll(){
//     display.value = '';
//     outputDisplay.value = ''
// }
function clickToClearAll(){
    display.innerHTML = '';
    outputDisplay.innerHTML = ''
};
// function calculate(){
//     outputDisplay.value = eval(display.value);
// };
function calculate(){
    outputDisplay.innerHTML = eval(display.innerHTML);
}
