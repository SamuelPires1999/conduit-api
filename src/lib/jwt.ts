import { sign } from "jsonwebtoken";

export function signJWT(payload: any) {
    const token = sign(
        {
            data: payload,
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 1 day
        },
        process.env.JWT_SECRET as string
    );

    return token;
}
