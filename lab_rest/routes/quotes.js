var express = require('express');
var router = express.Router();

//use the service
var service = require('../services/quoteservice');


router.get('/', function(req, res) {
    res.json(service.findAll());
});


router.get('/random', function(req, res) {
    //use service functions
    var id = Math.floor(Math.random() * service.findAll().length);
    //var q = quotes[id];
    var q = service.findById(id);
    res.json(q);
});


router.get('/:id', function(req, res) {
    if(service.findAll().length <= req.params.id || req.params.id < 0) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }
    // var q = quotes[req.params.id];
    var q = service.findById(req.params.id);
    res.json(q);
});


router.post('/', function(req, res) {
    if(!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }
    var newQuote = {
        author : req.body.author,
        text : req.body.text
    };
    //quotes.push(newQuote);
    service.create(newQuote);
    res.json(true);
});


router.delete('/:id', function(req, res) {
    if(service.findAll().length <= req.params.id) {
        res.statusCode = 404;
        return res.send('Error 404: No quote found');
    }
    // quotes.splice(req.params.id, 1);
    service.remove(req.params.id);
    res.json(true);
});

module.exports = router;