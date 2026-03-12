const express = require("express");
const app = express();

app.get("/", (req, res) => res.sendFile("/home/ahmed/repos/op_info_node/index.html"));
app.get("/about", (req, res) => res.sendFile("/home/ahmed/repos/op_info_node/about.html"));
app.get("/contact-me", (req, res) => res.sendFile("/home/ahmed/repos/op_info_node/contact-me.html"));
app.get("*splat", (req, res) => res.sendFile("/home/ahmed/repos/op_info_node/404.html"));

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
})



// const http = require('node:http');
// const fs = require('node:fs');

// const server = http.createServer((req, res) => {
//     let statusCode = 200;

//     let page = '';
//     console.log(req.url);

//     switch (req.url) {
//         case "/":
//             page = './index.html';
//             break;
//         case "/about":
//             page = './about.html';
//             break;
//         case "/contact-me":
//             page = './contact-me.html';
//             break;
//         default:
//             page = "./404.html"
//             statusCode = 404;
//             break;
//     }

//     fs.readFile(page, 'utf8', (err, data) => {
//         if (err) {
//         console.error(err);
//         return;
//         }
//     res.writeHead(statusCode, {'Content-Type' : 'text/html' });
//     res.end(data);
//     });
// });

// server.listen(8080);

