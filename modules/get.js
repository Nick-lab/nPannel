const client = require('./client');
const resource = require('./resource');
const router = require('./router');
const scripts = require('./scripts');
const path = require('path');
var hbs = require( 'express-handlebars');


// main function of get file
function Process(req, res, app){

    // split the request domain
    var domain = req.get('host').split(':')[0];

    // split url into array eg: domain.com/account/settings -> ["account", "settings"] 
    var urlArr = req.originalUrl.split('?')[0].replace(/^(\/)/, '').split('/');

    // parse get peramiters
    var GET = false;
    if(req.originalUrl.split('?').length > 1){
        GET = {};
        req.originalUrl.split('?')[1].split('&').forEach((keyVal)=>{
            let splitKey = keyVal.split('=');
            GET[splitKey[0]] = !isNaN(splitKey[1]) ? Number(splitKey[1]) : decodeURI(splitKey[1]);
        });
    }

    // http or https
    var protocol = req.protocol;
    
    // load clinet details
    client.load(domain).then((client)=>{
        // if client parse client and url to supply files
        
        if(client){
            //console.log(client);

            // clients folder directory use global from here out
            var clientDir = global.paths.clientDir = path.join(global.paths.clients, String(client.id));

            // check id url is trying to load a resource file or a page
            if(resource.isResource(urlArr)){
                
                // pass resolve / clients directory / and url Array and sends back file requested or a 404 if it doesn't exsist
                resource.get(res, clientDir, urlArr);
            }else{

                // setup handlebars to use clients directory for loading layouts / teemplates / and partials
                app.set('views', path.join(clientDir, 'views'));
                app.engine('hbs', hbs({
                    extname: 'hbs',
                    layoutsDir: path.join(clientDir, 'views/layouts'),
                    partialsDir: path.join(clientDir, 'views/partials'),
                    defaultLayout: 'default'
                }));
                app.set('view engine', 'hbs');

                // router determins what pages to load based on database pages not files
                router.resolve(client, urlArr).then((route)=>{
                    // route object to hold all data that comes from user scripts and should be rendered with template

                    // get path to user script
                    let pageScript = path.join(clientDir, 'page_scripts', route.page.page_id + '.js');
                    
                    // scripts loads and runs server scripts for user exposed_modules will be modules specifically designed to allow user to interact with server safely
                    // also want to setup a user script to run regaudless of what page is loaded
                    scripts.run(pageScript).then((data)=>{
                        console.log(data);
                        console.log(route);
                        if(data.error){
                            // must send errors to client if they appear otherwise they cannot debug code
                            res.send(data.error);
                        }else{
                            // all done 
                            res.render(route.page.page_id, route);
                        }
                        
                    });
                });
            }
        }else{
            // no client setup
        }
    })
}

module.exports.process = Process;