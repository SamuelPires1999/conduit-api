import { ZodError } from "zod";
import { IcreateNewUserDTO, createNewUserDTO } from "./dto";
import { db } from "../../config/database/db";
import { usersTable } from "../../config/database/schema/user";

export async function createNewUser(input: IcreateNewUserDTO) {
    try {
        const data = createNewUserDTO.parse(input);
        const newUser = await db
            .insert(usersTable)
            .values({
                email: data.email,
                username: data.userName,
                bio: data.bio,
                passwordHash: data.password,
            })
            .returning();

        return newUser;
    } catch (error) {
        if (error instanceof ZodError) {
            return error;
        } else {
            return {
                message: "Unknown error occured",
            };
        }
    }
}
