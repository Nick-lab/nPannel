module.exports = (socket, io) => { 
    console.log('User Connected');
    socket.on('test', () => {
        console.log('test socket');
        socket.emit('test-back', 'ok');
    })
}