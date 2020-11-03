var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/client'));

app.post('/csv', function (req, res) {
    console.log(req)
    var jsonData = req.body;
    var storeData = []; 
    fs.readFile('/samples/test', (err, fileData)=>{
        if (err) {
            console.log(err);
        } 
        else {
            
             
        }
    })

    fs.writeFile('/samples/test', jsonData, (err, fileData) => {}
        


    res.redirect("/");
    res.end();
});

app.get('/csv', function (req, res) {
    // res.redirect("/");
});

app.listen(3000, () => {
    console.log('server is listening ')
})