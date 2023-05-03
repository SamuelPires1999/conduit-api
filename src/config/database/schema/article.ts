import { date, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./user";

export const articleTable = pgTable("articles", {
    id: serial("id").primaryKey(),
    authorId: serial("author_id").references(() => usersTable.id),
    slug: varchar("slug", { length: 256 }),
    description: varchar("description", { length: 256 }),
    body: varchar("body", { length: 2000 }),
    title: varchar("title").notNull(),
    createdAt: timestamp("created_at", { withTimezone: false }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: false }).notNull().defaultNow(),
});
