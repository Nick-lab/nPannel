const client = require('./client');
const resource = require('./resource');
const router = require('./router');
const path = require('path');
var hbs = require( 'express-handlebars');

function Process(req, res, app){
    var domain = req.get('host').split(':')[0];
    var urlArr = req.originalUrl.split('?')[0].replace(/^(\/)/, '').split('/');
    var GET = false;
    if(req.originalUrl.split('?').length > 1){
        GET = {};
        req.originalUrl.split('?')[1].split('&').forEach((keyVal)=>{
            let splitKey = keyVal.split('=');
            GET[splitKey[0]] = !isNaN(splitKey[1]) ? Number(splitKey[1]) : decodeURI(splitKey[1]);
        });
    }
    var protocol = req.protocol;
    //console.log(domain, urlArr, GET, protocol);
    client.load(domain).then((client)=>{
        // if client parse client and url to supply files
        
        if(client){
            //console.log(client);
            var clientDir = path.join(global.paths.clients, String(client.id));
            if(resource.isResource(urlArr)){
                resource.get(res, clientDir, urlArr);
            }else{
                app.set('views', path.join(clientDir, 'views'));
                app.engine('hbs', hbs({
                    extname: 'hbs',
                    layoutsDir: path.join(clientDir, 'views/layouts'),
                    partialsDir: path.join(clientDir, 'views/partials'),
                    defaultLayout: 'default'
                }));
                app.set('view engine', 'hbs');

                router.resolve(client, urlArr).then((route)=>{
                    // run user script
                    let data = require(path.join(clientDir, 'page_scripts', route.page.page_id + '.js'))();
                    console.log(route);
                    res.render(route.page.page_id, route);
                })
            }
        }else{
            // no client setup
        }
    })
}

module.exports.process = Process;