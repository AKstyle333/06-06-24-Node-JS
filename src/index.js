const express = require("express");
const app = express();
const port = 3333;
app.listen(port, () => {
    setInterval(() => {
        console.log("1 sec Server is running at", port);
    }, 1000);
    setInterval(() => {
        console.log("2 sec Server is running at", port);
    }, 2000);
    setTimeout(() => {
        console.log("1 sec TimeOut Server is running at", port);
    }, 1000);
});
