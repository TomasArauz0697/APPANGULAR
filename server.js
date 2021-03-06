const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/appangular'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/appangular'}),
);
app.listen(process.env.PORT || 4080);
