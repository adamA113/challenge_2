var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('client'));

app.post('/csv', function (req, res) {
    console.log(req.body)
    res.end();
});

app.get('/', function (req, res) {
    res.end();
});

app.listen(3000, () => {
    console.log('server is listening ')
})