import express, { Request, Response } from "express";
import routes from "./api";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api/v1/", routes);

server.listen(3000, () => {
    console.log("Servidor ligado");
});
