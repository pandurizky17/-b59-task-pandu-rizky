const express = require("express");
const path = require("path");
const hbs = require("hbs");
const {
  formatDate,
  getRelativeTime,
  sliceText,
} = require("./controller/timeFormat");
const methodOverride = require("method-override");
require("dotenv").config();

const app = express();
const port = 5000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {}); //untuk memanggil satu file ke dalam file lain

// Memunculkan tiap halaman html yang akan ditampilkan
hbs.registerHelper("equal", (a, b) => {
  return a === b;
});
hbs.registerHelper("formatDate", formatDate);
hbs.registerHelper("times", getRelativeTime);
hbs.registerHelper("textSlice", sliceText);
const routerPages = require("./Router/RouterIndex");

app.use("/", routerPages);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
