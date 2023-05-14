'use strict';

const inputEl = document.getElementById('input-el');
const convertBtnEl = document.getElementById('convert-btn');
const resultHeadingEl = document.querySelectorAll('.result-heading');

const resultTextsEl = document.querySelectorAll('.result-text');



const lengthCalc = function (userValue) {
  const formulaValue = 3.281;
  const toFeet = userValue * formulaValue;
  const toMeter = userValue / formulaValue;

  return `${userValue} meters = ${toFeet.toFixed(3)} feet | ${userValue} feet = ${toMeter.toFixed(3)} meters`
}

const volumeCalc = function (userValue) {
  const formulaValue = 0.264;
  const toGallons = userValue * formulaValue;
  const toLiters = userValue / formulaValue;

  return `${userValue} liters = ${toGallons.toFixed(3)} gallons | ${userValue} gallons = ${toLiters.toFixed(3)} liters`
}

const massCalc = function (userValue) {
  const formulaValue = 2.204;
  const toPounds = userValue * formulaValue;
  const toKilos = userValue / formulaValue;

  return `${userValue} kilos = ${toPounds.toFixed(3)} pounds | ${userValue} pounds = ${toKilos.toFixed(3)} kilos`
}

convertBtnEl.addEventListener('click', function () {
  let inputValue = Number(inputEl.value)
  const results = [lengthCalc(inputValue), volumeCalc(inputValue), massCalc(inputValue)]

  for (let i = 0; i < resultTextsEl.length; i++) {
    resultTextsEl[i].textContent = results[i]
  }
})
