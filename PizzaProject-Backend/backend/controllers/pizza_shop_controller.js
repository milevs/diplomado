//File: controllers/gpsController.js
var mongoose = require('mongoose');
var PizzaBranch  = mongoose.model('PIZZA_BRANCH');

//GET - Return all in the DB
exports.getAllPoints = function(req, res) {
	console.log('call to get all points...');
	PizzaBranch.find(function(err, branch) {
    if(err) res.send(500, err.message);

    console.log('GET /api/pizza_branch')
		res.status(200).jsonp(branch);
	});
};

//POST - Insert a new in the DB
exports.addPoints = function(req, res) {
	console.log('POST /api/pizza_branch');
	console.log(req.body);

	var pizza = new PizzaBranch({
		code: req.body.code,
		name: req.body.name,
		description: req.body.description,
		phone: req.body.phone,
		mobile: req.body.mobile,
		manager: req.body.manager
	});

	pizza.save(function(err, pizza) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(pizza);
	});
};

//DELETE - Delete point by id
exports.deletePoint = function(req, res) {
	console.log("DELETE api/pizza_branch/ " + req.params.id);
	PizzaBranch.findById(req.params.id, function(err, pizza) {
		pizza.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(pizza);
		})
	});
};
