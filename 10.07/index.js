function splitStringAtDot(str) {
    // Sprawdzenie, czy string zawiera kropkę
    if (str.includes('.')) {
        // Podzielenie stringa na dwa na podstawie pierwszej napotkanej kropki
        const parts = str.split('.');
        const firstPart = parts[0];
        const secondPart = parts.slice(1).join('.'); // Dołączenie reszty, gdyby było więcej kropek
        return [firstPart, secondPart];
    } else {
        // Zwrócenie oryginalnego stringa, jeśli nie zawiera kropki
        return [str];
    }
}

const express = require('express');
const app = express();
const PORT = 3000;
const url = require('url');
const mime = require('mime-types');
const path = require('path')
const fs = require('fs');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, 'assets', req.path);

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            return res.status(404).json({ error: 'Plik nie został znaleziony' });
        }

        const mimeType = mime.lookup(filePath) || 'application/octet-stream';
        res.setHeader('Content-Type', mimeType);
        res.sendFile(filePath);
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
