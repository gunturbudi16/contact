const express = require("express");
const mongoose = require("mongoose");
//const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const cors = require("cors");
const dbName = "contact";
const app = express();

mongoose.connect(
  `mongodb+srv://guntur:123456abcd@cluster0-nvvg4.gcp.mongodb.net/${dbName}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//routes
const contacts = require("./routes/contacts");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   res.send("Haloo Ini ");
// });
app.use("/", contacts);
//https://gunturcontact16.herokuapp.com
const port = process.env.PORT || 2999;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
