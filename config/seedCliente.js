/**
* Populate DB with sample data on server start
* to disable, edit config/environment/index.js, and set `seedDB: false`
*/
'use strict';
// Insert seed models below
var User = require('../api/users/users.model');
User.countDocuments({}).exec((err, count) => {
    if (err) {
         console.error(err);
         return;
    }
    if (count == 0) {
       User.create({
            name : 'Allen',
            email : 'allen@gmail.com',
            password : 'vendorcliente'
       }, (err, seedClienteUser) => {
            if (err) {
                console.error(err);
                return;
            }
           console.log("SeedCliente superuser created");
       })
    }
})