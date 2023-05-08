import Express from "express";
import cors from "cors";
import authRoutes from "../modules/auth/auth-router";
import profileRoutes from "../modules/profile/profile-router";
import articleRoutes from "../modules/articles/articles-router";
export default async function setupServer() {
    const api = Express();
    api.use(cors());
    api.use(Express.json());

    // routing configs
    api.use("/auth", authRoutes);
    api.use("/profiles", profileRoutes);
    api.use("/articles", articleRoutes);

    api.listen(8080, () => {
        console.log("Conduit API running at -> localhost:8080");
    });
}
