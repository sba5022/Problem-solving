
const text = "madam";

let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

if (text === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}