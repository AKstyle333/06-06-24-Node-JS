const express = require("express");
const connectDB = require("./db/dbConnection");
const router  = require("./routes/v1");
const app = express();
const port = 3333;
app.listen(port, () => {
    setInterval(() => {
        console.log("1 sec Server is running at", port);
    }, 1000);
});

connectDB()
app.use(express.json())
app.use("/v1",router)