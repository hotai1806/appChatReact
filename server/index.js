const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = 5000;

const router = require('./router');

const app = express();
const {addUser ,removeUser ,getUser, getUserInRoom} = require('./users');
const { text } = require('express');
const server = http.createServer(app);

const io = socketio(server)

io.on('connection',(socket)=>{
    
    
    socket.on('join',({name,room}, callback)=>{
        const {error, user} = addUser({ id:socket.id, name, room});
        if(error) return callback(error);
        socket.emit('message', {user:'admin', text:`${user.name}, has joined`});
 
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
        socket.join(user.room);
        callback();
        
    })
    socket.on('sendMessage',(message, callback)=>{
        const user = getUser(socket.id)
        io.to(user.room).emit('message',{user:user.name , text: message});
        callback();
    })
    socket.on('disconnect',()=>{
        const user = removeUser(socket.id);

        if(user) {
          io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        }
        console.log(user); 
    })
})

app.use(router)
server.listen(PORT, ()=>{
    console.log("Serveer has started")
});