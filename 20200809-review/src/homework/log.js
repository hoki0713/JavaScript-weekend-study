const fs = require("fs");
const dateFns = require("date-fns");

const log = (message) => {
    const recordTime = dateFns.format(new Date(), "yyyy_MM_dd_HH");
    const date = dateFns.format(new Date(), "yyyy_MM_dd HH:mm:ss");

    fs.appendFile(
        `log_${recordTime}.txt`,
        `${date} :: ${message}\n`,
        "utf-8",
        (err) => {
            if(err) console.log(err);
        }
    )
}

module.exports = log;
