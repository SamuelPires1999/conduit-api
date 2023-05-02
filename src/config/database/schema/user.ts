import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    passwordHash: text("passwordHash").notNull(),
    username: text("username").notNull(),
    bio: varchar("bio", { length: 150 }),
    image: text("image"),
});
