import { Router } from "express";
import { ApiController } from "./apiControllers";

const routes = Router();
const apiController = new ApiController();

routes.get("/", apiController.hello);
routes.get("/students", apiController.readAllStudents);
routes.post("/students", apiController.createNewStudent);

export default routes;
