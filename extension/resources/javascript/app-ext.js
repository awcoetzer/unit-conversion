'use strict';

const inputEl = document.getElementById('input-el');
const convertBtnEl = document.getElementById('convert-btn');

const resultTextsEl = document.querySelectorAll('.result-text');

let inputValue = Number(inputEl.value)
// declaring the formula values
const lengthFormula = 3.281;
const volumeFormula = 0.264;
const massFormula = 2.204;

// to control the input length
const expandInputField = function () {
  let inputLength = inputEl.value.length
  if (inputLength < 2) {
    this.style.width = '11.7rem'
  } else if (inputLength > 2 && inputLength < 7) {
    this.style.width = ++inputLength + 'ch';
  } else {
    this.style.overflowX = 'scroll';
  }
}

/*
  one function to rule them all 🤣, this function 
  takes in various parameters to help output
  the desired outcome.
*/
const conversion = function (userValue, unitFormula, leftName, rightName) {
  const leftConversion = userValue * unitFormula;
  const rightConversion = userValue / unitFormula;

  return `${userValue} ${leftName} = ${leftConversion.toFixed(3)} ${rightName} | ${userValue} ${rightName} = ${rightConversion.toFixed(3)} ${leftName}`
}

inputEl.addEventListener('input', expandInputField)

/* 
  the event listener grabs the input value
  and stores that in a variable, it also iterates
  over the p elements and systematically places
  the results of the result array for each p element.
*/
convertBtnEl.addEventListener('click', function () {
  inputValue = inputEl.value
  console.log(typeof inputValue)
  const results = [
    conversion(inputValue, lengthFormula, 'meters', 'feet'),
    conversion(inputValue, volumeFormula, 'liters', 'gallons'),
    conversion(inputValue, massFormula, 'kilos', 'pounds')
  ]

  for (let i = 0; i < resultTextsEl.length; i++) {
    resultTextsEl[i].textContent = results[i]
  }
})
