import { ZodError } from "zod";
import { IcreateNewUserDTO, IloginUserDTO, createNewUserDTO, loginUserDTO } from "./dto";
import { db } from "../../config/database/db";
import { usersTable } from "../../config/database/schema/user";
import { comparePasswords, hashPassword } from "../../lib/bcrypt";
import { eq } from "drizzle-orm";

export async function createNewUser(input: IcreateNewUserDTO) {
    try {
        const data = createNewUserDTO.parse(input);

        const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, input.email));
        if (existingUser.length != 0) {
            throw new Error("Email already in use");
        }

        const hashedPassword = await hashPassword(data.password);
        const newUser = await db
            .insert(usersTable)
            .values({
                email: data.email,
                username: data.userName,
                bio: data.bio,
                passwordHash: hashedPassword,
            })
            .returning();

        return newUser;
    } catch (error: any) {
        if (error instanceof ZodError) {
            return error;
        } else {
            throw new Error(error.message);
        }
    }
}

export async function loginUser(input: IloginUserDTO) {
    try {
        const data = loginUserDTO.parse(input);

        const userFound = await db.select().from(usersTable).where(eq(usersTable.email, input.email));
        if (userFound.length === 0) {
            throw new Error("Wrong credentials");
        }

        const passwordsMatching = await comparePasswords(data.password, userFound[0].passwordHash);

        if (!passwordsMatching) {
            throw new Error("Wrong credentials");
        }

        return {
            user: {
                ...userFound[0],
            },
            token: "Should be a token here",
        };
    } catch (error: any) {
        if (error instanceof ZodError) {
            return error;
        } else {
            throw new Error(error.message);
        }
    }
}
