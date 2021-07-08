const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());






app.get("/", (req, res) => {
 res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 3009; //this must be the same as in the client package.json =>   "proxy":"http://localhost:3014/",
app.listen(PORT, () => {
 console.log(`Server is up and listening to PORT: ${PORT}`);
});