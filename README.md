# curdoperation
Install Sails
To install Sails:
$ npm install sails -g

Create your app
To generate a new app, just cd into the directory where you want it to be, and type:
$ sails new test-project

To take a look at your new Sails app:
$ cd test-project
$ sails lift


To Make a new controller and model :-
	sails generate api <clients>
it will provide the default the all the RESTapi for the mention controller name,
To make the connection with the database:-
Mysql :-
1. Install using npm :-
	npm install sails-mysql --save
2. mention the database configuration in the file app/config/connection.js
	MysqlServer: {
	    adapter: 'sails-mysql',
	    host: 'localhost',
	    user: 'root', //optional
	    password: '', //optional
	    database: 'curd_sail' //optional database name
	  },
here, mysqlserver is an object which help to connect with the database, mention the object in the file
app/config/models.js
module.exports.models = {
  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  connection: 'MysqlServer',
  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
  migrate: 'alter' //
};

As you change in the models, the database will be update according if
  migrate: 'alter'
as been selected/uncomment, else while running the sails, it will ask for alter the migration

TO access the model golbally,
set the parameter in file :- app/config/globals.js
module.exports.globals = {
  _ : false,
  async: false,
  models: false,
  sails: true
};
