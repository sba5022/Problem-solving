

console.log(uniqueNumbers);
const numbers = [1, 2, 2, 3, 3, 3, 4];

const frequency = {};

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (frequency[number]) {
    frequency[number]++;
  } else {
    frequency[number] = 1;
  }
}

console.log(frequency);