import { Router } from "express";
import { createNewUser, loginUser } from "./auth-service";
import * as AuthController from "./auth-controller";

const authRoutes = Router();

authRoutes.post("/register", AuthController.register);

authRoutes.post("/login", AuthController.login);

export default authRoutes;
