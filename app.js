const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const indexRouter = require("./Routes/index");

const server = http.createServer(app);
const io = new Server(server);

let waitingusers = [];
let romms = {

}

io.on("connection", (socket) => {
    socket.on("joinroom", () => {
        if (waitingusers.length > 0) {
            let partner = waitingusers.shift();
            let roomname = `${socket.id}-${partner.id}`;
            socket.join(roomname);
            partner.join(roomname);
            io.to(roomname).emit("joined", roomname);
        } else {
            waitingusers.push(socket);
        }
    });

    socket.on("message", (data) => {
        socket.broadcast.to(data.room).emit("message", data.message)
    })

    socket.on("signalingMessage", (data) => {
        socket.broadcast.to(data.room).emit("signalingMessage", data.message);
    })
    
    socket.on("startVideoCall", ({room}) => {
        socket.broadcast.to(room).emit("incomingCall")
    })
    
    socket.on("acceptCall", ({room}) => {
        socket.broadcast.to(room).emit("callAccepted")
    })

    socket.on("disconnect", () => {
       let index = waitingusers.findIndex(waitingusers => waitingusers.id === socket.id)
       waitingusers.splice(index, 1); 
    })
});



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);
server.listen(3000)
