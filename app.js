const app = require("pushstate-server");
require("dotenv").config();

const config = {
    port: process.env.PORT,
    directory: "./src",
};

app.start(config, () => {
    console.log(
        `Server running, navigate to http://localhost:${config.port || 3000}`
    );
});
