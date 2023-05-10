import { Request, Response } from "express";
import { checkAuthentication } from "../../lib/check-auth";
import { create, getAllArticles } from "./articles-service";

export async function createArticle(req: Request, res: Response) {
    try {
        const userId = checkAuthentication(req);

        const newArticle = await create({
            ...req.body,
            authorId: userId as string,
        });

        return res.json({
            article: {
                ...newArticle,
            },
        });
    } catch (error: any) {
        return res.status(403).json({
            message: error.message,
        });
    }
}

export async function getAll(req: Request, res: Response) {
    try {
        const articles = await getAllArticles();

        return res.json(articles);
    } catch (error: any) {
        return res.status(403).json({
            message: error.message,
        });
    }
}
