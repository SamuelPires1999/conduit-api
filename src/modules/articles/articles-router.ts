import { Router } from "express";

const articleRoutes = Router();

articleRoutes.get("/", (req, res) => {
    return res.send("return all articles here");
});

export default articleRoutes;
