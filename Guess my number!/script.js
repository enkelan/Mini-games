// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1991));
// BUG
// TODO
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/
// PROBLEM 2'
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality
// twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays
/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND THE BUG
  console.table(measurement);

  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/

/*
Give an array of forecasted maximum temperatures,
the thermometer displays a string with these
temperature.

Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days"

Create a function 'pringForecast' which takes in an 
array 'arr' and logs a string like the above to the 
console.

Use the problem-solving framework: Understand the 
problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
/*
function printForecast(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const day = i + 1;
    const temperature = arr[i];
    newArr.push(`... ${temperature}°C in ${day} days`);
  }
  console.log(newArr.join(''));
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
*/
/*
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

function printForecast(temps) {
  let tempsStr = '';
  for (let i = 0; i < temps.length; i++) {
    tempsStr += ` ${temps[i]} degrees in ${i + 1} days ...`;
  }
  console.log('...' + tempsStr);
}
printForecast(arr1);
printForecast(arr2);
*/
