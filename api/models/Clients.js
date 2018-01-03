/**
 * Clients.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    first_name : {
      type: 'STRING',
      allowNull : false
    },
    last_name : {
      type: 'STRING',
      allowNull : false
    },
    email : {
      type: 'STRING',
      allowNull : false
    },
    phone_number : {
      type: 'STRING',
      allowNull : false
    }
  }
};
