const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
const courseRoutes = require('./src/routes/course.routes');
app.use('/v1', courseRoutes);

const db = require("./src/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


app.get("/", (req, res) => {
 res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.PORT || 3009; //this must be the same as in the client package.json =>   "proxy":"http://localhost:3014/",
app.listen(PORT, () => {
 console.log(`Server is up and listening to PORT: ${PORT}`);
});