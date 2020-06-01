
const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");
const async = require("async")
const requireLogin = require('../middlewares/requireLogin');
const requireAdmin = require("../middlewares/requireBoss")

Router.get("/userinfo/:id", requireAdmin, (req, res) => {
    let userID = req.params.id
    FileController.findUserByID(userID, (err, data) => {
        res.render("userInfo", {
            FirstName: data[0].userFirstName,
            LastName: data[0].userLastName,
            DoB: data[0].userDoB,
            Phone: data[0].userPhone,
            UserName: data[0].userUserName,
            Email: data[0].userEmail,
            Address: data[0].userAddress,

        })
    })
    // res.send(userID)


})

module.exports = Router