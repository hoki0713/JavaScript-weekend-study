const http = require("http");
const log = require("./log");
const readFile = require("./readFile");

http.createServer((req, res) => {
    log(req.headers["user-agent"]);

    switch(req.url) {
        case "/" : res.end("Hello World");
            break;
        case "/log" : readFile(res);
            break;
        default : res.end("404");
    }
}).listen(8081);