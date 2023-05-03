import { db } from "./db";
import { migrate } from "drizzle-orm/node-postgres/migrator";

async function runMigrations() {
    console.log("----- running db migrations -----");
    await migrate(db, { migrationsFolder: "./__generated__/migrations" });
    console.log("----- migrations DONE -----");
}

runMigrations();
