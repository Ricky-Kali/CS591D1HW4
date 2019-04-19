var express = require('express');
var request = require('request');
var router = express.Router();

let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=30min&apikey=LDPJHXF0B1VQMUVK';
router.get('/', function(req, res, next) {
    request.get(url, (err, response, body) => {
        if(err){
            return console.log(err);
        }
        let reply = JSON.parse(body);
        let metadata = reply['Meta Data'];
        resolve(metadata);
        })
        .then(value => {
            res.send( value );
        });
})

module.exports = router;
