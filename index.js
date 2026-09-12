const text = "javascript";

let count = 0;

for (let i = 0; i < text.length; i++) {
  if (text[i] === "a") {
    count++;
  }
}

console.log(count);