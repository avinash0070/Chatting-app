const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 

const app = express();
app.use(express.static(__dirname + '/dist/project'));
app.use('*',(req,res)=>{
         res.sendFile(path.join(__dirname))
        });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
         res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
         res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
        next();
         });
              
const port = process.env.PORT || 3000;
const server = http.createServer(app)
var io = require('socket.io').listen(server)
io.on('connection',(socket)=>{
           console.log ('io is connected');
          // for socket on
          socket.on('join',(data)=>{
                  socket.join(data.room); 
                    console.log(data.user+' join room'+data.room);
                  //  TO Brodcast all the user which is connected to the room
                      socket.broadcast.to(data.room).emit('new user joined', {user:data.user, message:'has joined this room.'});
                               })
          socket.on('leave', (data)=>{
                    console.log(data.user + 'left the room : ' + data.room);
                    
                     socket.broadcast.to(data.room).emit('left room', {user:data.user, message:'has left this room.'});
                      socket.leave(data.room);
                              });
          socket.on('message',(data)=>{
                        io.in(data.room).emit('new message', {user:data.user, message:data.message});
                        console.log(data)
                              })
})

server.listen(port,( )=>console.log('you ARE CONNECTED  :' + port))