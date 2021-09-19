const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 9000;
const url = "mongodb://localhost:27017";

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
app.use(express.json());
try {
  con.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log("Error: " + error);
}

const userrouter = require("./routes/users");
app.use("/", userrouter);

app.listen(port, () => {
  console.log("Server started");
});
