const numbers = [12, 45, 7, 89, 23, 56];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(largest);
 const text = "JavaScript is awesome";

function countVowels(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels(text));
const number = [1, 2, 2, 3, 4, 4, 5, 5, 6];

const uniqueNumbers = [];

for (let i = 0; i < number.length; i++) {
  if (!uniqueNumbers.includes(number[i])) {
    uniqueNumbers.push(number[i]);
  }
}

console.log(uniqueNumbers);
const num = [12, 45, 7, 89, 23, 56];

let smallest = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] < smallest) {
    smallest = num[i];
  }
}

console.log(smallest);
// const nu = [10, 20, 30, 40, 50];

// let sum = 0;

// for (let i = 0; i < nu.length; i++) {
//   sum = sum + nu[i];
// }

// console.log(sum);
const avg = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < avg.length; i++) {
  sum += avg[i];
}

const average = sum / avg.length;

console.log(average);