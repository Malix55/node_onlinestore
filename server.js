const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

//load enviorment variables
dotenv.config({ path: "./config/config.env" });

//connect db
connectDB();

const app = express();

//body parser
app.use(express.json());

//enable cors
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api/v1/stores", require("./routes/stores"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server is running on ${PORT} and mode is: ${process.env.NODE_ENV}`
  );
});
