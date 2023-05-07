import { Request, Response } from "express";
import { createNewUser, loginUser } from "./auth-service";

export async function login(req: Request, res: Response) {
    try {
        const result = await loginUser(req.body);
        return res.json(result);
    } catch (error: any) {
        return res.status(401).json({
            message: error.message,
        });
    }
}

export async function register(req: Request, res: Response) {
    try {
        const result = await createNewUser(req.body);
        return res.json(result);
    } catch (error: any) {
        return res.status(409).json({
            message: error.message,
        });
    }
}
