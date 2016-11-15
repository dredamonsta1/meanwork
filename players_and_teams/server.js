var express = require('express');
var app = express();
var path = require('path');

// ------------------------------------------client is the static folder
app.use(express.static(path.join(__dirname, 'client')))

app.listen(8000, function(){
    console.log('listening on 8000')
});