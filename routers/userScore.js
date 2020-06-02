const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");
const async = require("async")
const requireLogin = require('../middlewares/requireLogin');
const moment = require("moment")

Router.get("/userscore", requireLogin, (req, res) => {
    let userID = req.user._id
    console.log(userID)
    FileController.findUserScore(userID, (err, data) => {
        let Arr = data
        if (Arr[0]) {
            let listElem = Arr.map((item, index) =>
                `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>
                        <a href="">${moment(item.CreatedAt).format("DD MMM YYYY")}</a>
                    </td>
                    <td>
                        <a href="">${item.writeScore}</a>
                    </td>
                    <td>
                        <a href="">0</a>
                    </td>
                    <td>
                        <a href="">${item.writeScore + 0}</a>
                    </td>
 
                 </tr>
                `)
            res.render("userScore", {
                Table: listElem
            })

        } else {
            res.render("chuathi")
        }


    })

})

module.exports = Router

