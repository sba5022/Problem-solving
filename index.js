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
const students = [
  { name: "Sumaia", age: 23 },
  { name: "Nadia", age: 21 },
  { name: "Mitu", age: 24 }
];

const result = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].age > 22) {
    result.push(students[i]);
  }
}

console.log(result);
const sentence = "I love JavaScript programming";

const words = sentence.split(" ");

let longest = "";

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}

console.log(longest);