import { ZodError } from "zod";
import { IcreateNewUserDTO, IloginUserDTO, createNewUserDTO, loginUserDTO } from "./dto";
import { db } from "../../config/database/db";
import { comparePasswords, hashPassword } from "../../lib/bcrypt";
import { signJWT } from "../../lib/jwt";
import { exclude } from "../../lib/exclude-key";

export async function createNewUser(input: IcreateNewUserDTO) {
    try {
        const data = createNewUserDTO.parse(input);

        const existingUser = await db.user.findUnique({
            where: {
                email: input.email,
            },
        });
        if (existingUser) {
            throw new Error("Email already in use");
        }

        const hashedPassword = await hashPassword(data.password);
        const newUser = await db.user.create({
            data: {
                email: input.email,
                bio: input.bio,
                userName: input.userName,
                passwordHash: hashedPassword,
            },
        });

        return exclude(newUser, ["passwordHash"]);
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

        const userFound = await db.user.findUnique({
            where: {
                email: input.email,
            },
        });
        if (!userFound) {
            throw new Error("Wrong credentials");
        }

        const passwordsMatching = await comparePasswords(data.password, userFound.passwordHash);

        if (!passwordsMatching) {
            throw new Error("Wrong credentials");
        }

        const jwt = signJWT(userFound.id);

        return {
            user: {
                ...exclude(userFound, ["passwordHash"]),
            },
            token: jwt,
        };
    } catch (error: any) {
        if (error instanceof ZodError) {
            return error;
        } else {
            throw new Error(error.message);
        }
    }
}
