import { Router } from "express";
import * as ProfileController from "./profile-controller";

const profileRoutes = Router();

profileRoutes.get("/:userName", ProfileController.getProfile);

export default profileRoutes;
