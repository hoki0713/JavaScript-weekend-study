const http = require("http");
const readHTML = require("./readHTML");
const DB = require("./DB");
const userComponent = require("./components/userComponent");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        readHTML("index", (data) => res.end(data));
        break;
      case "/users":
        const users = DB.selectAll("users")
        return res.end(`<html><body>${userComponent(users)}</body></html>`)
        // readHTML(req.url, (data) => res.end(data));
        break;
      default:
        res.end("404 error");
    }
  })
  .listen(8081);
