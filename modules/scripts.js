function Run(scriptPath){
    return new Promise((res)=>{
        try {
            // run the module.exports function of a script
            let data = require(scriptPath)();
            res(data);
        } catch(err) {
            // catch any and all errors to be returned to user
            res({
                error: err.message
            });
        }
    });
}

module.exports.run = Run;