const client = require('./client');
const path = require('path');
const fs = require('fs');

function Process(socket, io) {
    let domain = socket.handshake.headers.host.split(':')[0];
    client.load(domain).then((client)=>{
        if(client) {
            socket.join(domain);
            let clientDir = path.join(global.paths.clients, String(client.id));
            let nsp = io.of(domain);
            let socket_path = path.join(clientDir, 'endpoints/socket.js');
            fs.access(socket_path, error => {
                console.log('socket file');
                socket.on('join-room', (room) => {
                    if(room.match(new RegExp(`^${domain}?[\/]?[a-z0-1]*`))){
                        socket.join(room);
                    } else {
                        socket.emit('err', `'${room}' is an invalid room, please join a room under your domain; ${domain}/room`);
                    }
                })
                if (error) {
                    fs.writeFileSync(socket_path, `module.exports = (socket, io) => { // code . . . }`);
                }
                try {
                    require(socket_path)(socket, nsp);
                } catch (error) {
                    socket.emit('err', error.message + '; in file socket.js');
                }

            })

            // if(socket.nsp.name == domain){
                
            // } else {
            //     socket.emit('err', `must join your domain name space: var socket = io('${domain}')`);
            // }
        }
    })
}

module.exports.process = Process;