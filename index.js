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

const port = 3000; 

// setup global object
global.paths = {
  root: __dirname,
  modules: path.join(__dirname, 'modules'),
  clients: path.join(__dirname, 'clients')
}

// base connection for data base
global.database = {
  host: 'localhost',
  user: 'mysql',
  password: 'mysql',
  database: 'npanel'
}

// domain to determin dev environment
global.devDomains = [
  '192.168.50.179',
  'localhost',
  'vitushost',
  'vitushosting',
];

// root modules
const get = require(path.join(global.paths.modules, 'get'));
const post = require(path.join(global.paths.modules, 'post'));
const client = require(path.join(global.paths.modules, 'client'));
const socket_module = require(path.join(global.paths.modules, 'socket'));

// setup session managment
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'some secret change later',
  resave: true,
  saveUninitialized: true,
  cookie: { 
    expires: 20000,
    secure: false,
    sameSite: false
  }
}));
app.use((req, res, next) => {
  console.log('req.session', req.session)
  next()
})
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
//   console.log('Listening on port: '+port);
// })