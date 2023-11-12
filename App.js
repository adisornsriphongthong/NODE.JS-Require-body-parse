const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/hello', (req, res) => {
    var firstName = req.body['First-Name'];
    var lastName = req.body['Last-Name'];

    res.json({
        'name':`${firstName} ${lastName}`
    })
})

const port = 3000;
app.listen(port, (err) => {
    if(err) throw err;
    console.log('The server is running on port ' + port);
});