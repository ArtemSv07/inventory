const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

let activeSessions = 0;

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // URL фронтенд-сервера
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  activeSessions++;
  io.emit("activeSessions", activeSessions);
  console.log(`Користувач підключився. Активні сесії: ${activeSessions}`);

  socket.emit("activeSessions", activeSessions);

  socket.on("disconnect", () => {
    activeSessions--;
    io.emit("activeSessions", activeSessions);
    console.log(`Користувач відключився. Активні сесії: ${activeSessions}`);
  });

  socket.on("requestActiveSessions", () => {
    socket.emit("activeSessions", activeSessions);
  });
});

server.listen(3001, () => {
  console.log("Сервер запущено на http://localhost:3001");
});
