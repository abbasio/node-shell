const fs = require('fs');

console.log(fs.readFile('cat.js', function (err, data) {
    if (err) {
        throw err
    } else {
        console.log(data)
    }
}))

module.exports = {
    cat: function (file) {

    }
}