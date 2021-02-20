const prompt = require("prompt-sync")();

let user_input = prompt("Please enter a command: ");

while (user_input !== 'Tigray') {
  console.log("You command was: " + user_input);
  user_input = prompt("Please enter a command: ");
}
console.log("This is exactlly the holy land Tigrigna community...");


console.log("-====================================");
let i = 0;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i);

  }
  i++;
}
console.log("-====================================");
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


