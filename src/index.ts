import setupServer from "./config/server";
import dotenv from "dotenv";

const main = async () => {
    dotenv.config();
    await setupServer();
};

main().catch(err => {
    console.log(err);
});
