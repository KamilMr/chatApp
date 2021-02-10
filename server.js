const express = require('express');
const app = express();
const path = require('path');

//PORT
const port = '8000';

//MIDLEWARE
app.use(express.static(path.join(__dirname, './client')));

//ANOTHER
const messages = [];

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
})


app.listen(port, () => {
    console.log('Your app is running on port ',port);
})