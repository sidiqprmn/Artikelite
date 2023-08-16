const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const FileUpload = require('express-fileupload');
dotenv.config();

require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use((req, d, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));

const artikelRoutes = require("./routes/artikel");
app.use("/artikel", artikelRoutes);

app.listen(PORT, () => {
  console.log(`Server up and running on PORT ${PORT}`);
});