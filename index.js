const text = "JavaScript is awesome";

const result = text.replaceAll(" ", "");

console.log(result);
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];

const uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (!uniqueNumbers.includes(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }
}

console.log(uniqueNumbers);