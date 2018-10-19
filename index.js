const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
var dogs = [];
var catsName = [];
var dogsName = [];
app.use(bodyParser.json());

/*app.get('/', (req, res) => {
    res.send('Hello world!');
});*/


/*app.post('/', (req, res) => { 
    const name = req.body.name;
    //res.send('Hello ' + name);
    const obj = {
        "greeting": `Hello ${name}!` 
    };
    res.json(obj);
});*/

app.get('/', (req, res) => {
    //res.send(dogs.json);
    var dogsJSON = JSON.stringify(dogsName)
    res.send("name: " + dogsJSON);
    
});

app.get('/:index', (req, res) => {
    //res.send(dogs.json);
    var dogsJSON = JSON.stringify(dogsName)
    res.send("name: " + dogsJSON);
    
});

app.post('/', (req, res) => {
    const dogName = req.body.dogName;
    dogsName.push(dogName);
    const obj = {
        "status": `Added ${dogName}`
    }
    res.json(obj);
});
    

app.listen(port, () => {
    console.log('Running at port 3000!');
});