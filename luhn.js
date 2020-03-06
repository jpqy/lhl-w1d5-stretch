// Gets the luhn sum of a number (with check digit removed)
const luhnSum = function(array, shouldDouble) {
  if (array.length === 0) {
    return 0;
  } else {

    // Store rightmost digit and remove it from array
    let currentDigit = array.pop();

    // If needed, double digit and subtract 9 if new digit is over 9
    if (shouldDouble) {
      currentDigit *= 2;
      if (currentDigit >= 9) {
        currentDigit -= 9;
      }
    }

    // Call function recursively with the opposite value
    return currentDigit + luhnSum(array, !shouldDouble);
  }
}


// Write a function check, which, given a number,
// returns whether it is valid or not (according to the Luhn Algorithm).
const check = function(num) {

  // Split numerical number into array of digits
  numArray = num.toString().split('').map(x => parseInt(x));

  // Get the check digit
  const checkDigit = numArray.pop();

  // See if luhn sum 1s digit equals the check digit
  return (checkDigit === 10 - luhnSum(numArray, true) % 10);
}

console.log(check(79927398713));
console.log(check(6226623955821602));
console.log(check(30471490033146));
console.log(check(6228717872773157));
console.log(check(30452006094541));

