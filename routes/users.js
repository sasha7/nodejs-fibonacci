var express = require('express');
var router = express.Router();
var util = require('util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  res.send('respond with a resource with ID: ' + req.params.id);
});

// Example usage:
// http POST http://localhost:3000/users Content-Type=application/json id=2
// curl -X POST -H 'Content-Type: application/json' -d '{"id": "2"}' http://localhost:3000/users
router.post('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    id: req.body.id,
    username: 'sasham'
  }));
});

module.exports = router;
