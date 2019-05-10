const db = require('./database');

function Load (domain) {
    return new Promise((res)=>{
        db.select({table:'clients c JOIN client_settings cs ON (cs.client = c.id)', where: `domain = '${domain}'`}).then((result)=>{
            res(result ? result : false);
        })
    })
}

module.exports.load = Load;