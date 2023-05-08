import { ZodError } from "zod";
import { IcreateArticleDTO, createArticleDTO } from "./dto";
import { db } from "../../config/database/db";

export async function create(input: IcreateArticleDTO) {
    try {
        const data = createArticleDTO.parse(input);

        const newArticle = await db.article.create({
            data: {
                body: data.body,
                description: data.description,
                slug: data.slug,
                title: data.title,
                author: {
                    connect: {
                        id: data.authorId,
                    },
                },
            },
        });

        return newArticle;
    } catch (error: any) {
        if (error instanceof ZodError) {
            return error;
        } else {
            throw new Error(error.message);
        }
    }
}
