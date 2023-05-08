import { Request } from "express";
import { verifyJWT } from "./jwt";

export function checkAuthentication(req: Request) {
    const token = req.headers.authorization;
    if (!token) {
        throw new Error("Non Authorized");
    }
    const payload = verifyJWT(token);
    // Ignoring data type error for the moment, since data will be guaranteed here, TODO - find a reliable way to validate this later
    //@ts-ignore
    return payload.data;
}
