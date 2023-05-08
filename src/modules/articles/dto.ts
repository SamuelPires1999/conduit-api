import { z } from "zod";

export const createArticleDTO = z.object({
    slug: z.string().nonempty(),
    description: z.string(),
    body: z.string().max(2000),
    title: z.string().nonempty(),
    authorId: z.string().uuid(),
    //tags: z.optional(z.array(z.string())),
});

export type IcreateArticleDTO = z.infer<typeof createArticleDTO>;
