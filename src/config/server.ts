import Express from "express";
import cors from "cors";

export default async function setupServer() {
    const api = Express();
    api.use(cors());

    api.listen(8080, () => {
        console.log("Conduit API running at -> localhost:8080");
    });
}
