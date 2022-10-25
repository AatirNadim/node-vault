const path = require('path');

console.log(path.dirname(process.mainModule.filename));

module.exports = path.dirname(process.mainModule.filename);

//gives the path of the folder where it is imported