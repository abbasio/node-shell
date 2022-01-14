const fs = require('fs');
const oFiles = [];

fs.readdir(__dirname, (err, files) => {
  if(err){
    throw err;
  } else {
    //process.stdout.write(files.join('\n'));
    oFiles.push(files);
  }
}
)
module.exports = {ls: function (){
  process.stdout.write(oFiles.join(' '));
}}
