import Express, { Request, Response } from "express";
import cors from "cors";
import authRoutes from "../modules/auth/auth-router";
import profileRoutes from "../modules/profile/profile-router";
export default async function setupServer() {
    const api = Express();
    api.use(cors());
    api.use(Express.json());

    // routing configs
    api.use("/auth", authRoutes);
    api.use("/profiles", profileRoutes);

    api.listen(8080, () => {
        console.log("Conduit API running at -> localhost:8080");
    });
}
