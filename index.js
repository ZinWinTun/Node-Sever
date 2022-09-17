const express = require('express');
const app = express();
app.listen(8888,()=> console.log('listening at 8888'));
app.use(express.static('public'));

//For css
app.use(express.static(__dirname + '/public'));
