const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (req.url == "/") {
        res.end('Hello!');
    }
    else if (req.url.startsWith("/get_params")) {
        console.log(url.parse(req.url, true).query)

        let parametry = url.parse(req.url, true).query;
        let tab = Object.entries(parametry);

        let czas = Date.now();
        let fileName = `params_${czas}.json`;
        let filePath = path.join(__dirname, fileName);

        fs.writeFile(filePath, JSON.stringify(tab, null, 2), (err) => {
        });
        res.end("{'ok': 'ok'}");
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
