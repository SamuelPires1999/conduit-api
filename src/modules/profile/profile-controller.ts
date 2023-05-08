import { Request, Response } from "express";
import { getProfileByName } from "./profile-service";

export async function getProfile(req: Request, res: Response) {
    const result = await getProfileByName(req.params.userName);

    return res.json({
        profile: {
            ...result,
        },
    });
}
