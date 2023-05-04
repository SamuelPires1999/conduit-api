import { pgTable, serial, text, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable(
    "users",
    {
        id: serial("id").primaryKey(),
        email: text("email").notNull(),
        passwordHash: text("passwordHash").notNull(),
        username: text("username").notNull(),
        bio: varchar("bio", { length: 150 }),
        image: text("image"),
    },
    usersTable => {
        return {
            emailIndex: uniqueIndex("email_idx").on(usersTable.email),
        };
    }
);
