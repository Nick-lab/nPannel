function Run(options){
    return new Promise((res)=>{
        try {

            // run the module.exports function of a script
            const script = require(options.pageScript);
            // require = () => {
            //     res({error: `require() function is disabled please use build it modules to access database and files`});
            // };
            // pass exposed modules to script
            let modules = {
                url: options.urlArr,
                session: options.req.session,
                GET: options.GET
            }
            let data = script(modules) || null;
            if(data && data.then && typeof data.then === 'function') {
                
                data.then((newData) => {
                    res(newData);
                })
            } else { 
                res(data);
            }
            
        } catch(err) {
            // catch any and all errors to be returned to user
            res({
                error: err.message + ' in page script'
            });
        }
    });
}

module.exports.run = Run;