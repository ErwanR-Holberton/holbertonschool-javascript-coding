const readline = require('readline');

const interfaceIsReserved = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

interfaceIsReserved.question('', (input) => {
  console.log('Your name is:', input);
  console.log('This important software is now closing');
  interfaceIsReserved.close();
});
