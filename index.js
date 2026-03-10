const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    let statusCode = 200;

    let page = '';
    console.log(req.url);

    switch (req.url) {
        case "/":
            page = './index.html';
            break;
        case "/about":
            page = './about.html';
            break;
        case "/contact-me":
            page = './contact-me.html';
            break;
        default:
            page = "./404.html"
            statusCode = 404;
            break;
    }

    fs.readFile(page, 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        return;
        }
    res.writeHead(statusCode, {'Content-Type' : 'text/html' });
    res.end(data);
    });
});

server.listen(8080);

