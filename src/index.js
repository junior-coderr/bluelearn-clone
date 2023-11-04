const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;


app.use('/login',express.static(path.join(__dirname, '../public')));
app.use('/',express.static(path.join(__dirname,'../homePage')));
app.set('view engine', 'hbs');


app.listen(port,()=>{
    console.log('listening on port '+port);
});