const fs = require('fs');
const path = require('path');
var tries = 0;

function Proccess(res, client, urlArr) {
    tries = 0;
    urlArr.shift();
    let filePath = path.join(global.paths.clientDir, urlArr.join('/'));
    Send(res, filePath);
}

function Send(res, filePath) {
    tries ++;
    fs.access(filePath, fs.F_OK, (err)=>{
        if(err){
            if(tries > 2){
                // resolve the request with a 404
                console.log('Not Found', filePath);
                res.status(404).send('Not found');
            }else{
                fs.writeFile(filePath, "", (err) => {
                    if (err) {
                        res.status(404).send('Error Provisioning File');
                    } else{
                        Send(res,filePath);
                    }
                }); 
            }
        }else{ 
            // stream file to user
            fs.createReadStream(filePath).pipe(res);
        }
    })
}

module.exports.proccess = Proccess;