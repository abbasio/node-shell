const pwd = require('./pwd.js')
const ls = require('./ls.js')
const cat = require('./cat.js')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires aftera  user types in a line
process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(" ");
  const cmd = input[0];
  const fileName = input[1];
  switch (cmd) {
    case "pwd":
      pwd.pwd();
      break;
    case "ls":
      ls.ls();
      break;
    case `cat`:
      console.log(input)
      break;
  }

  // process.stdout.write(`You typed: ${cmd}`);
  process.stdout.write('\nprompt > ');
})



