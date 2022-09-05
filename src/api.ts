import { Router } from "express";
import { ApiController } from "./apiControllers";

const routes = Router();
const apiController = new ApiController();

routes.get("/", apiController.hello);
routes.get("/students", apiController.readAllStudents);
routes.get("/students/:id", apiController.readOneStudent);
routes.post("/students", apiController.createNewStudent);
routes.delete("/students/:id", apiController.deleteOneStudent);

export default routes;
