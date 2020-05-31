const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");


let app = express();
let home = require("./routers/home")
let createUser = require("./routers/createUser")
let createTracNghiem = require("./routers/createTracNghiem")
let createDienTu = require("./routers/createDienTu")
let auth = require("./routers/auth")
let userScore = require("./routers/userScore")
let userInfo = require("./routers/userInfo")
let allUser = require("./routers/allUser")
let userInfoWithID = require("./routers/userInfoWithID")
require("./routers/passport");


app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use("/", home)
app.use("/", createUser)
app.use("/", createTracNghiem)
app.use("/", createDienTu)
app.use("/", test)
app.use("/", auth)
app.use("/", userScore)
app.use('/', userInfo)
app.use("/", allUser)
app.use("/", userInfoWithID)

app.use(express.static("public"));

mongoose.connect('mongodb://localhost/howtotoeic', (err) => {
    if (err) console.log(err);
    console.log("Database connected")
});

app.listen(5000, (err) => {
    if (err) { console.log(err) };
    console.log("App listen at 5000")
})
