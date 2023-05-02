import setupServer from "./config/server";

const main = async () => {
    await setupServer();
};

main().catch(err => {
    console.log(err);
});
