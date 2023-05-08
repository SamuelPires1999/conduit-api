import { Request, Response } from "express";
import { getProfileByName } from "./profile-service";
import { checkAuthentication } from "../../lib/check-auth";
import { exclude } from "../../lib/exclude-key";

export async function getProfile(req: Request, res: Response) {
    try {
        checkAuthentication(req);
        const result = await getProfileByName(req.params.userName);

        return res.json({
            profile: {
                ...exclude(result, ["passwordHash"]),
            },
        });
    } catch (error: any) {
        return res.status(403).json({
            message: error.message,
        });
    }
}
