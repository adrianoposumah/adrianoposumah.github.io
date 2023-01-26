const express = require("express");
const app = express();

app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000);
