import { db } from "../../config/database/db";

export async function getProfileByName(input: string) {
    const userProfile = await db.user.findFirst({
        where: {
            userName: input,
        },
    });

    return userProfile;
}
