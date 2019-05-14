const db = require('./database');

function Load (domain) {
    return new Promise((res)=>{
        if(global.devDomains.indexOf(domain) > -1){
            // load dev portal
            res({
                id: 0,
                domain: '',
                site_type: 'basic'
            })
        }else{
            db.select({table:'clients c JOIN client_settings cs ON (cs.client = c.id)', where: `domain = '${domain}'`}).then((result)=>{
                res(result[0] ? result[0] : false);
            })
        }
    })
}

module.exports.load = Load;