const db = require('./database');

function Load (domain) {
    return new Promise((res)=>{
        
        db.select({table:'clients c JOIN client_settings cs ON (cs.client = c.id) JOIN client_domains cd ON (cd.client = c.id)', where: `cd.domain = '${domain}'`}).then((result)=>{
            if(result) {
                if(result.error){
                    res(result);
                } else {
                    res(result[0] ? result[0] : false);
                }
            }
        })
        
    })
}

module.exports.load = Load;