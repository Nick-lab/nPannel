const path = require('path');
const app = require('express')();
const https = require('https');
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 3000;

global.paths = {
    root: __dirname,
    modules: path.join(__dirname, 'modules'),
    clients: path.join(__dirname, 'clients')
}

global.database = {
  host: 'database-1.cuvvuk1ww1yl.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'db-admin01!',
  database: 'innodb'
}

global.devDomains = [
  'localhost',
  'vitushost',
  'vitushosting',
];

// root modules
const get = require(path.join(global.paths.modules, 'get'));
const post = require(path.join(global.paths.modules, 'post'));
const client = require(path.join(global.paths.modules, 'client'));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// get and post processors
app.get('*', (req,res)=>{get.process(req,res,app)});
app.post('*', post.process);

app.listen(port, ()=>{
    console.log('Listening on port: '+port);
})
