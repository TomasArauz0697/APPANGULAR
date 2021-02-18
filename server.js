const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + './dist/appangular'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/appangular/'}),
);
app.listen(process.env.PORT || 8080);

