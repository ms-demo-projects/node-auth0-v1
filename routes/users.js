var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({'users':[]});
});

/* GET user by specific emailId */
router.get('/:email', function(req, res, next) {
	console.log(req.params);
  	res.send({"name": "smartsense consultency", 
  		"first_name": "smartsense", 
  		"last_name": "consultency",
  		"email": req.params.email
  	});
});

/* POST add user profile in future */
router.post('/', function(req, res, next) {
	console.log(req.body);
  	res.send({'text':'respond with a resource'});
});

module.exports = router;
