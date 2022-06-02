const http = require("http");
const fs = require("fs");

const home = fs.readFileSync("C:\\Neeraj Kumar\\Learning Website Development\\First Backend Website\\index.html");
const services = fs.readFileSync("C:\\Neeraj Kumar\\Learning Website Development\\First Backend Website\\services.html");
const about = fs.readFileSync("C:\\Neeraj Kumar\\Learning Website Development\\First Backend Website\\about.html");
const contact = fs.readFileSync("C:\\Neeraj Kumar\\Learning Website Development\\First Backend Website\\contact.html");

const hostname = "127.0.0.1";
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");

    let url = req.url;
    if (url == "/") {
        res.end(home);
    }
    else if (url == "/services") {
        res.end(services);
    }
    else if (url == "/about") {
        res.end(about);
    }
    else if (url == "/contact") {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("<h1> 404 Not Found </h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});