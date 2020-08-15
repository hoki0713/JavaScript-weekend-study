const fs = require("fs");
const dateFns = require("date-fns");

const getCurrentLogFileName = () => {
    return `log_${dateFns.format(new Date(), "yyyy_MM_dd_HH")}.txt`;
}

const log = (message) => {
    const date = dateFns.format(new Date(), "yyyy_MM_dd HH:mm:ss");

    fs.appendFile(
        getCurrentLogFileName(),
        `${date} :: ${message}\n`,
        "utf-8",
        (err) => {
            if(err) console.log(err);
        }
    )
}

const readLogFile = (callbackFunction) => {

    fs.readFile(
        getCurrentLogFileName(),
        (err, data) => {
            if(err) {
                console.log(err);
            } else {
                callbackFunction(data);
            }
        }
    )
};

module.exports = { log, readLogFile } ;
