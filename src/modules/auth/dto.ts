import z from "zod";

export const createNewUserDTO = z.object({
    email: z.string().email().nonempty(),
    password: z.string().nonempty(),
    bio: z.string().max(150).optional(),
    userName: z.string().nonempty(),
});

export type IcreateNewUserDTO = z.infer<typeof createNewUserDTO>;

export const loginUserDTO = z.object({
    email: z.string().email().nonempty(),
    password: z.string().nonempty(),
});

export type IloginUserDTO = z.infer<typeof loginUserDTO>;
