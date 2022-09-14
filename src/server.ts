import express, { Request, Response } from "express";
import routes from "./api";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.use("/api/v1/", routes);

server.get("/", (req: Request, res: Response) => {
    res.redirect("/api/v1/");
})

server.listen(process.env.PORT || 8080, () => {
    console.log("Servidor ativo com sucesso");
});
