const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const http = require("http").Server(app);
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var server = http.listen(5000, () => {
  console.log("Listening to port " + server.address().port);
});

app.get('/getData', (req, res) => {
    var textByLine = fs.readFileSync('uploads/accountactivity.csv').toString().split("\n");

    var data = [];
    var words = [];
    var counter = 0;

    textByLine.forEach(line => {
      words = line.split(",");

      if(words[0] != ""){
        if(words[2] == ''){
          words[2] = 0;
        }

        if(words[3] == ''){
          words[3] = 0;
        }

        var item = {
          date: words[0],
          name: words[1],
          amount: words[2]
        }

        data[counter++] = item;
      }
        
    });

    console.log(data);
    
    res.send(data);
});
