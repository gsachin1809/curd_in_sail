/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// var User = require('../models/User.js');
module.exports = {
	index : function(req, res){
		// console.log(User);
		User.find().exec(function afterFind(err, users) {
		  if (err) {
				console.log(err);
		    // uh oh
		    // (handle error; e.g. `return res.serverError(err)`)
		    return;
		  }
			console.log(users);
			res.send(users);
		  // would you look at all those zookeepers?
		  // (now let's do the next thing;
		  //  e.g. `_.reduce(zookeepers, ...)` and/or `return res.json(zookeepers)`)
		});
	},
};
