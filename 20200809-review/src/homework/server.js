const http = require("http");
const { log, readLogFile } = require("./logManager");

http.createServer((req, res) => {
    log(req.headers["user-agent"]);

    switch(req.url) {
        case "/" : res.end("Hello World");
            break;
        case "/log" : readLogFile(data => res.end(data));
            break;
        default : res.end("404");
    }
}).listen(8081);