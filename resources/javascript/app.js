'use strict';

const inputEl = document.getElementById('input-el');
const convertBtnEl = document.getElementById('convert-btn');
const resultHeadingEl = document.querySelectorAll('.result-heading');

const resultTextsEl = document.querySelectorAll('.result-text');

const lengthFormula = 3.281;
const volumeFormula = 0.264;
const massFormula = 2.204;

const conversion = function (userValue, unitFormula, leftName, rightName) {
  const leftConversion = userValue * unitFormula;
  const rightConversion = userValue / unitFormula;

  return `${userValue} ${leftName} = ${leftConversion.toFixed(3)} ${rightName} | ${userValue} ${rightName} = ${rightConversion.toFixed(3)} ${leftName}`
}

convertBtnEl.addEventListener('click', function () {
  let inputValue = Number(inputEl.value)
  const results = [
    conversion(inputValue, lengthFormula, 'meters', 'feet'),
    conversion(inputValue, volumeFormula, 'liters', 'gallons'),
    conversion(inputValue, massFormula, 'kilos', 'pounds')
  ]

  for (let i = 0; i < resultTextsEl.length; i++) {
    resultTextsEl[i].textContent = results[i]
  }
})
