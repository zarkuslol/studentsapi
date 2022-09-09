import { Request, Response } from "express";

export const verifyAccessKey = (req: Request, res: Response, callback: Function, accessKey: string | undefined) => {
    return (accessKey === process.env.PRIVATE_KEY) ? callback(req, res) : res.status(404).json({ message: "Página não encontrada" });
}
