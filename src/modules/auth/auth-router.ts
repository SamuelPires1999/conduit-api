import { Router } from "express";
import * as AuthController from "./auth-controller";

const authRoutes = Router();

authRoutes.post("/register", AuthController.register);

authRoutes.post("/login", AuthController.login);

export default authRoutes;
