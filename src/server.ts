import express, { Request, Response } from "express";
import http from "http";
import routes from "./api";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api/v1/", routes);

server.get("/", (req: Request, res: Response) => {
    res.redirect("/api/v1/");
})

http.createServer(server).listen(80);
