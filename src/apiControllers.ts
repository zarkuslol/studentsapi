import { StudentType } from "./helpers/student";
import { Request, Response } from "express";
import { DatabaseFunctions } from "./helpers/database";

const db = new DatabaseFunctions();

export class ApiController {
    hello(req: Request, res: Response) {
        res.json({ message: "Olá da classe API" });
    }

    async readAllStudents(req: Request, res: Response) {
        try {
            const data = await db.selectAll();
            res.json(data);
        }
        catch (e) {
            res.json(e);
        }
    }

    async readOneStudent(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await db.selectOne(id);
            res.json(data);
        }
        catch (e) {
            res.json(e);
        }
    }

    async createNewStudent(req: Request, res: Response) {
        const { name, grade, year } = req.body;
        const newStudent: StudentType = { name: name, grade: grade, year: year };
        try {
            const data = await db.create(newStudent);
            res.status(201).json({ added: data });
        }
        catch (e) {
            res.json(e);
        }
    }

    async deleteOneStudent(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await db.delete(id);
            res.status(201).json({ deleted: data })
        }
        catch (e) {
            res.json(e);
        }
    }
}
