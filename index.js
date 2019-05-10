const path = require('path');
const app = require('express')();
const https = require('https');
const session = require('express-session');
const port = 3000;

global.paths = {
    root: __dirname,
    modules: path.join(__dirname, 'modules')
}
global.database = {
  host: 'database-1.cuvvuk1ww1yl.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'db-admin01!',
  database: 'innodb'
}

// root modules
const get = require(path.join(global.paths.modules, 'get'));
const client = require(path.join(global.paths.modules, 'client'));

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('*', get.process);
app.listen(port, ()=>{
    console.log('Listening on port: '+port);
})
