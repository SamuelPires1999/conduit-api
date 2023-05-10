import { Router } from "express";
import * as ArticleController from "./articles-controller";

const articleRoutes = Router();

articleRoutes.post("/", ArticleController.createArticle);
articleRoutes.get("/", ArticleController.getAll);

export default articleRoutes;
