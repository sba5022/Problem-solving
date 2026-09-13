

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
const products = [
  { name: "Pen", price: 20 },
  { name: "Book", price: 100 },
  { name: "Bag", price: 500 }
];

let total = 0;

for (let i = 0; i < products.length; i++) {
  total += products[i].price;
}

console.log(total);