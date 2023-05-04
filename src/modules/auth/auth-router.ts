import { Router } from "express";
import { createNewUser } from "./auth-service";

const authRoutes = Router();

authRoutes.post("/register", async (req, res) => {
    const result = await createNewUser(req.body);
    return res.json(result);
});

export default authRoutes;
