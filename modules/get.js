const fs = require('fs');
const path = require('path');
const client = require('./client');

function Process(req, res){
    var domain = req.get('host').split(':')[0];
    var urlArr = req.originalUrl.replace(/^(\/)/, '').split('/');
    var protocol = req.protocol;
    console.log(domain, urlArr, protocol);
    client.load(domain).then((client)=>{
        // if client parse client and url to supply files
        
        res.send(client);
    })
}

module.exports.process = Process;