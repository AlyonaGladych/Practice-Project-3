let fs = require('fs');

fs.open('someScript.js', 'w', function (err, file) {
    if (err) throw err;
    console.log('New file created');
});

fs.appendFile('someScript.js', 'console.log(\'Welcome to JS\')', function (err) {
    if (err) throw err;
    console.log('You just added some script to your JS file');
});

fs.writeFile('someScript.js', 'console.log(\'Are you ready to code? \')', function (err) {
    if (err) throw err;
    console.log('Your file has been updated');
});

fs.readFile('someScript', 'utf-8', function (err, file) {
    if (err) throw err;
    console.log(file);
});
