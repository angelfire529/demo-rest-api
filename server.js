var campaigns = require('./data/campaigns.json');
var creatives = require('./data/creatives.json');

var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

var router = express.Router();

router.route('/campaigns')
.get((req, res) => {
    var data = campaigns;
    res.json(data);
});

router.route('/creatives')
.get((req, res) => {
    var data = creatives;
    res.json(data);
});

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    });
    next();
});

app.use('/api', router);


app.get('/', (req, res) => {
    res.send('Welcome to angular-demo API!');
})


app.listen(port, () => {
    console.log('listening on port: ', port);
})