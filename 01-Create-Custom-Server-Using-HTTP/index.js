const http = require('http');
const fs = require("fs");
const { log } = require('console');

const PORT = 8001

const requestHandler = (req, res) => {
    let fileName = ""

    switch (req.url) {
        case '/':
            fileName = './pages/index.html'
            break;
        case '/about':
            fileName = './pages/about.html'
            break;
        case '/contact':
            fileName = './pages/contect.html'
            break;
        case '/blogs':
            fileName = './pages/blogs.html'
            break;

        default:
            break;
    }

    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        res.end(data)
    })

}

const server = http.createServer(requestHandler)

server.listen(PORT, (err) => {
    if (err) {
        console.log("server is not started");
        return false
    } else {
        console.log("server started on port no " + PORT);
    }
})