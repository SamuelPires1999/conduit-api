import { Router } from "express";
import { createNewUser, loginUser } from "./auth-service";

const authRoutes = Router();

authRoutes.post("/register", async (req, res) => {
    try {
        const result = await createNewUser(req.body);
        return res.json(result);
    } catch (error: any) {
        return res.status(409).json({
            message: error.message,
        });
    }
});

authRoutes.post("/login", async (req, res) => {
    try {
        const result = await loginUser(req.body);
        return res.json(result);
    } catch (error: any) {
        return res.status(401).json({
            message: error.message,
        });
    }
});

export default authRoutes;
