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
	create : function(req, res){
		// console.log(User);
		var data = {
			first_name : 'sachin',
			last_name :'gupta',
			email : 'gsachin1809@gmail.com'
		}
		User.create({first_name:data.first_name , last_name : data.last_name, email:data.email}).exec(function (err, finn){
		  if (err) { return res.serverError(err); }

		  sails.log('Finn\'s id is:', finn.id);
		  return res.ok();
		});
	},
	update : function(req, res){
		// console.log(User);
		var id = req.params.id;
		var data = {
			first_name : 'sachin_update',
			last_name :'gupta_ipdate',
			email : 'gsachin1809@gmail.com'
		}
		console.log(id);
		User.findOne({id : id}).exec(function(err, users){
			users.first_name = data.first_name;
			users.last_name = data.last_name ;
			users.save(function(err , result){
				console.log(err);
				console.log(result);
				res.send(result);
			});
			console.log(users);
		})
	},
	show : function(req, res){
		// console.log(User);
		var id = req.params.id;
		console.log(id);
		User.findOne({id : id}).exec(function(err, users){
			res.send(users);
		})
	},
	destroy : function(req, res){
		// console.log(User);
		var id = req.params.id;

		console.log(id);
		User.destroy({id : id}).exec(function(err, users){
			res.send(users);
		})
	},
};
