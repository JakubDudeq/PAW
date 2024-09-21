const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');


    if(req.url == "/"){
        res.end('Hello!')
    }

    else if (req.url == "/1"){
        res.end('Strona Główna')
    }

    else if (req.url == "/2"){
        let JSONPath = path.join(__dirname, 'package.json');
        fs.readFile(JSONPath, (err, data) => {
            res.end(data);
        });

    }

    else if (req.url == "/3"){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(`<!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                  </head>
                  <body>
                    <h1>Jakaś losowa Strona pod zadanie 3</h1>
                    <hr>
                    <h2>Woo</h2>
                  </body>
                  </html>`)
    }

    else if (req.url == "/4"){
        HTMLPath = path.join(__dirname, 'plik.html');
        fs.readFile(HTMLPath, (err, data) => {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.end(data);
        })
    }
});


const PORT = 8080;
        server.listen(PORT, () => {
            console.log(`Serwer działa na http://localhost:${PORT}`);
        });
