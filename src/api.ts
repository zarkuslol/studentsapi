import { Request, Response, Router } from "express";
import { ApiController } from "./apiControllers";
import { verifyAccessKey } from "./helpers/keyVerifier";

const routes = Router();
const apiController = new ApiController();

routes.get("/", (req: Request, res: Response) =>
    verifyAccessKey(req, res, apiController.hello, req.header("Private-Access-Key")
));

routes.get("/students", (req: Request, res: Response) =>
    verifyAccessKey(req, res, apiController.readAllStudents, req.header("Private-Access-Key")
));

routes.get("/students/:id", (req: Request, res: Response) =>
    verifyAccessKey(req, res, apiController.readOneStudent, req.header("Private-Access-Key")
));

routes.post("/students", (req: Request, res: Response) =>
    verifyAccessKey(req, res, apiController.createNewStudent, req.header("Private-Access-Key")
));

routes.delete("/students/:id", (req: Request, res: Response) =>
    verifyAccessKey(req, res, apiController.deleteOneStudent, req.header("Private-Access-Key")
));

//routes.get("/students", apiController.readAllStudents);
//routes.get("/students/:id", apiController.readOneStudent);
//routes.post("/students", apiController.createNewStudent);
//routes.delete("/students/:id", apiController.deleteOneStudent);

export default routes;
