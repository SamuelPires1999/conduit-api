import { Router } from "express";
import { db } from "../../config/database/db";

const profileRoutes = Router();

profileRoutes.get("/:userName", async (req, res) => {
    console.log(req.params);
    const userProfile = await db.user.findFirst({
        where: {
            userName: req.params.userName,
        },
    });

    return res.json({
        profile: {
            ...userProfile,
        },
    });
});

export default profileRoutes;
