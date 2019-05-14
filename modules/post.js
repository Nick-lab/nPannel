const client = require('./client');

function Process(req, res){
    var domain = req.get('host').split(':')[0];
    var urlArr = req.originalUrl.replace(/^(\/)/, '').split('/');
    var protocol = req.protocol;
    var GET = false;
    if(req.originalUrl.split('?').length > 1){
        GET = {};
        req.originalUrl.split('?')[1].split('&').forEach((keyVal)=>{
            let splitKey = keyVal.split('=');
            GET[splitKey[0]] = !isNaN(splitKey[1]) ? Number(splitKey[1]) : decodeURI(splitKey[1]);
        });
    }
    var POST = req._body ? req.body : false;
    if(POST['apiKey'] || GET['apiKey']){
        res.send({response: 'ok'})
    }else{
        res.send({
            error_number: 2,
            error: 'No Api key'
        });
    }
}

module.exports.process = Process;