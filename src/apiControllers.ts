import { StudentType } from "./helpers/student";
import { Request, Response } from "express";
import { DatabaseFunctions } from "./helpers/database";

const db = new DatabaseFunctions();

export class ApiController {
    hello(req: Request, res: Response) {
        res.json({ message: "Olá da classe API" });
    }

    readAllStudents(req: Request, res: Response) {
        const data = db.select();
        res.json(data);
    }

    createNewStudent(req: Request, res: Response) {

    }
}
