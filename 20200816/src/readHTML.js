const fs = require("fs");
const path = require("path");


const readHTML = (fileName, callbackFunction) => {
  const name = path.join(__dirname, `../public/${fileName}.html`);
  fs.readFile(name, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      return callbackFunction(data);
    }
  });
};

module.exports = readHTML;
