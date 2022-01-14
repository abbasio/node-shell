const pwd = require('./pwd.js')
const ls = require('./ls.js')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires aftera  user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //removes the newline
  switch (cmd){
    case "pwd":
      pwd.pwd();
      break;
    case "ls":
      ls.ls();
      break;
    }
    // process.stdout.write(`You typed: ${cmd}`);
    process.stdout.write('\nprompt > ');
  })



