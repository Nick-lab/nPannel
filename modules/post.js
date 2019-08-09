const client = require('./client');
const db = require('./database');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');

function Process(req, res){
    var domain = req.get('host').split(':')[0];
    var urlArr = req.originalUrl.replace(/^(\/)/, '').split('/');
    var protocol = req.protocol;
    var GET = false;
    if(urlArr[0] == 'admin') urlArr.shift();
    if(urlArr[0] == 'admin') urlArr.shift();

    if(req.originalUrl.split('?').length > 1){
        GET = {};
        req.originalUrl.split('?')[1].split('&').forEach((keyVal)=>{
            let splitKey = keyVal.split('=');
            GET[splitKey[0]] = !isNaN(splitKey[1]) ? Number(splitKey[1]) : decodeURI(splitKey[1]);
        });
    }
    var POST = req._body ? req.body : false;
    const action = urlArr[0];

    client.load(domain).then((client)=>{
        if (client) {

            if (action == 'signin'){
                if(POST.email && POST.pass ){
                    db.query(`
                    SELECT * FROM clients c JOIN client_domains cd ON (cd.client = c.id) WHERE cd.domain = '${domain}' AND c.email = '${POST.email}'`).then((result)=>{
                        if(result && !result.error){
                            let user = result[0];
                            if(POST.pass === user.password){
                                user.auth = true;
                                res.send(user);
                            }else{
                                res.send(false);
                            }
                        }
                    })
                }
            }
        
            if (action == 'get-pages'){
                db.query(`
                    SELECT dp.* 
                    FROM domain_pages dp 
                    JOIN client_domains cd 
                    ON (cd.id = dp.domain)
                    WHERE cd.domain = '${domain}'
                    AND dp.parent = '${POST.parent}'
                `).then((pages) => {
                    db.getRow(`SELECT dp.* 
                        FROM domain_pages dp 
                        JOIN client_domains cd 
                        ON (cd.id = dp.domain)
                        WHERE cd.domain = '${domain}'
                        AND dp.id = '${POST.parent}'`).then((parent)=>{
                        let tmp = {
                            parent,
                            pages
                        }
                        res.send(tmp);
                    })
                });
            }
        
            if (action == 'page') {
                if (POST.do){
                    var Do = POST.do;
                    delete POST.do;
                    
                    if(Do == 'create-page'){
                        db.getRow(`SELECT id FROM client_domains WHERE domain = '${domain}'`).then((result)=>{
                            if(result) {
                                console.log(result);
                                POST.domain = result.id;
                                POST.id = Math.random().toString(36).substr(2, 9);
                                db.insert('domain_pages', POST).then((result)=>{
                                    res.send(result)
                                })
                            } else {
                                res.send('error');
                            }
                        })
                    }
                    if(Do == 'edit-page'){
        
                    }
                    if(Do == 'delete-page'){
                        
                    }
                }
            }

            if (action == 'save-code') {
                const clientDir = path.join(global.paths.clients, String(client.id));
                var form = new formidable.IncomingForm();
                form.parse(req, function(err, fields, files) {
                    Object.keys(files).forEach((key) => {
                        if(fields[key + '-path']){
                            let filePath = path.join(clientDir, fields[key + '-path']);
                            console.log(filePath);
                            console.log(files[key]);
                            let dest = fs.createWriteStream(filePath);
                            fs.createReadStream(files[key].path).pipe(dest);
                        }
                    })
                    res.send({ok: true});
                });
                
            }

        }
    });

}


module.exports.process = Process;