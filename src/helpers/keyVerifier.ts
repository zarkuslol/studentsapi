import { Request, Response } from "express";

export const verifyAccessKey = (req: Request, res: Response, callback: Function, accessKey: string | undefined) => {
    return (accessKey === "paodealface") ? callback(req, res) : res.status(404).json({ message: "Página não encontrada" });
}
