'use strict';

const Client = require('../client/clients.model');

module.exports = {
      index: (req, res) => {
          Client
          .find({})
          .exec((err, clientDetails)=>{
               if (err) {
                   res.status(500).json({message : err})
               }
res.status(200).json({ message: "Client Details fetched Successfully", data : clientDetails});
          })
      },
      retrieve: (req, res) => {
           const clientId = req.params.id;
           Client
           .findOne({_id:clientId})
           .exec((err, clientDetails)=>{
                if (err) {
                    res.status(500).json({message : err})
                }
                
                res.status(200).json({ message: "Client Details fetched Successfully", data : clientDetails});
           })
       },
       create: (req, res) => {
           Client.create(req.body, (err, clientDetails) => {
                if (err) {
                     res.status(500).json({message : err})
                }
                res.status(201).json({ message: "Client Created Successfully", data : clientDetails});
           })
       },
       update: (req, res)=>{
            const clientId = req.params.id;
            Client
            .findByIdAndUpdate(clientId, { $set: req.body })
            .exec((err, clientDetails) => {
                 if (err) res.status(500).json({message : err})
                 res.status(200).json({ message: "Client updated"});
            })
       },
       delete: (req, res)=>{
            const clientId = req.params.id;
            Client
            .findByIdAndUpdate(clientId, { $set: { is_active: false}})
            .exec((err, clientDetails) => {
                 if (err) res.status(500).json({message : err})
            
                 res.status(200).json({ message: "Client Deleted"});
             })
       }
}