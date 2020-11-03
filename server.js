var express = require('express');
var app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(__dirname + '/client'));

app.post('/csv', function (req, res) {
    // console.log(req)
    var jsonData = req.body;
    var storeGeneralKeys = []; 
    var storeData = []; 

    //// assumed that the data in sales_report.json is the data arrived to the serer/////
    // loop through the data and store the general keys in the storeGeneralKeys array
    for (let key in jsonData) {     
        storeGeneralKeys.push(key);

        // loop through the data and store the values of each child object in the storeData array
        if (key === "children") {    
            for (let i = 0; i < jsonData["children"].length; i++){
                for (let j = 0; j < storeGeneralKeys.length; j++) {
                    storeData.push(jsonData["children"][i].storeGeneralKeys[j])
                }
            }
        break; 
        }
     }
    // console.log(storeGeneralKeys)

    //creating a text file to store the generalkeys in the firstline
    fs.writeFile('/samples/test', storeGeneralKeys, (err,fileData)=>{
        if (err) {
            console.log(err);
        } 
    });
    
    // store the data in the nextlines
    fs.writeFile('/samples/test', jsonData, (err, fileData) => {
        if (err) {
            console.log(err);
        }
    })
    
    res.redirect("/csv");
    res.end();
});

app.get('/csv', function (req, res) {
    res.render("/");
});

app.listen(3000, () => {
    console.log('server is listening ')
})