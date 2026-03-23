var express = require('express');
var app = express();

app.set('view engine','ejs');

const URL = process.env.BACKEND_URL|| 'http://localhost:8000/api';

app.get('/', async function(req, res) {
    try {
        const response = await fetch(URL);   // native fetch
        const data = await response.json();

        res.render('index', { data: data });

    } catch (err) {
        console.error("FULL ERROR:", err);
        res.status(500).send(err.stack);
    }
});

app.listen(3000, function() {
    console.log('Ares listening on port 3000');
});