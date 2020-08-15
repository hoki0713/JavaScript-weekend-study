const fs = require("fs");
const dateFns = require("date-fns");

const readFile = (res) => {
    const currentTime = dateFns.format(new Date(), "yyyy_MM_dd_HH");

    fs.readFile(
        `log_${currentTime}.txt`,
        (err, data) => {
            if(err) console.log(err);
            res.end(data);
        }
    )
};

module.exports = readFile;