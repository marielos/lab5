var data = require("../data.json");

exports.addFriend = function(req, res) {  
var nameAdd = req.query.name;
var descAdd = req.query.description;  
var newFriend = 
	{
		"name": nameAdd,
	  	"description": descAdd,		
	  	"imageURL": "http://lorempixel.com/400/400/people"
	}
console.log(newFriend);
res.render('add', data["friends"].push(newFriend))
}
