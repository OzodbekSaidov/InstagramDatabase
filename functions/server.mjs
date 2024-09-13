import Users from "../db/Routes/Users.mjs"
import express from "express";
import ServerlessHttp from "serverless-http";

const server = express();

const cors = require("cors");

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

server.get("/", (req, res) => {
  res.send(200);
});

server.use("/users", Users);


export const handler2 = ServerlessHttp(server);

export const handler = async (event, context) => {
  const result = await handler2(event, context);
  return result;
};
