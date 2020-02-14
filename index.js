const path = require('path');
const Cors = require('cors');
const bodyParser = require('body-parser');
const app = require('express')();
const session = require('express-session');
const frameguard = require('frameguard');
const fs = require('fs');

const http = require('http').createServer(app);
const https = require('https');

const io = require('socket.io').listen(http);

var args = {};
process.argv.slice(2).forEach((arg)=> {
  let split = arg.split('=');
  if(split.length > 1){
    args[split[0]] = split[1];
  } else {
    args[arg] = true;
  }
})

const port = args.deploy ? 80 : 3000; 

// setup global object
global.paths = {
  root: __dirname,
  modules: path.join(__dirname, 'modules'),
  clients: path.join(__dirname, 'clients')
}

// base connection for data base
global.database = args.deploy ? deployDB : localDB;

let localDB = {
  host: 'localhost',
  user: 'mysql',
  password: 'mysql',
  database: 'npanel'
}

let deployDB = {
  host: 'localhost',
  user: 'admin',
  password: 'Nicholas-lab2489',
  database: 'npanel'
}

// domain to determin dev environment
global.devDomains = [
  '192.168.50.179',
  'localhost',
  'vitushost',
  'vitushosting',
  'npanel.io'
];

// root modules
const get = require(path.join(global.paths.modules, 'get'));
const post = require(path.join(global.paths.modules, 'post'));
const socket_module = require(path.join(global.paths.modules, 'socket'));

// setup session managment
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'some secret change later',
  resave: true,
  saveUninitialized: true,
  cookie: { 
    expires: 300000,
    secure: false,
    sameSite: false
  }
}));

app.use(frameguard())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(Cors());

// get and post processors
app.get('*', (req,res)=>{get.process(req,res,app)});
app.post('*', post.process);
io.on('connection', (socket)=>{ socket_module.process(socket, io); });

// run server and listen on defined port
http.listen(port, ()=>{
    console.log('Listening on port: '+port);
})

// try {
//   var key = fs.readFileSync('server.key');
//   var cert = fs.readFileSync('server.cert');
// } catch (e) {
//   key = false;
//   cert = false;
// }

// https.createServer({
//   key: key,
//   cert: cert
// }, app)
// .listen(port, function () {
// })