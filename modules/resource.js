const fs = require('fs');
const path = require('path');
const resources = [
    "js", 
    "png", 
    "jpeg",
    "jpg",
    "ico",
    "css"
]
function IsResource(urlArr){
    // if last element of array ends with a resource file extension
    return resources.indexOf(urlArr[urlArr.length - 1].split('.').pop()) > -1;
}

function Get(res, dir, urlArr){
    Send(res, path.join(dir, 'resources', urlArr.join('/')) );
}

function Send(res, resourcePath){
    // determin if file exsist
    fs.access(resourcePath, fs.F_OK, (err)=>{
        if(err){
            // resolve the request with a 404
            res.status(404).send('Not found');
        }else{
            // stream file to user
            fs.createReadStream(resourcePath).pipe(res);
        }
    })
}

module.exports.get = Get;
module.exports.send = Send;
module.exports.isResource = IsResource;