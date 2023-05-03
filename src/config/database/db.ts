import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
    host: "127.0.0.1",
    port: 5432,
    user: "conduit-db",
    password: "conduit-db",
    database: "conduit-api-db",
});

export const db = drizzle(pool);
