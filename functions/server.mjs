import Users from "../db/Routes/Users.mjs"
import express from "express";
import ServerlessHttp from "serverless-http";
import path from 'path';

const server = express();

const cors = require("cors");

server.use(express.static(path.join(__dirname, '../../public'))); // Adjust the path

// Serve index.html explicitly if needed
server.get("/", (req, res) => {
  const filePath = path.join(__dirname, '../../public/index.html');
  res.sendFile(filePath);
});


server.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

server.get("/", (req, res) => {
  res.render(index.html);
});

server.use("/users", Users);


export const handler2 = ServerlessHttp(server);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
