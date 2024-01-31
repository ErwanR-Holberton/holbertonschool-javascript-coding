const readline = require('readline');

const interfaceIsReserved = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

interfaceIsReserved.question('', (input) => {
  console.log('Your name is:', input);
  interfaceIsReserved.close();
});

interfaceIsReserved.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
