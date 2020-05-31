const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");
const requireAdmin = require("../middlewares/requireBoss")
const moment = require("moment")

Router.get("/alluser", requireAdmin, (req, res) => {
    FileController.getAllUser((err, data) => {
        let Arr = data
        if (Arr[0]) {
            let listElem = "";
            Arr.map((item, index) =>
                `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>
                        <a href="http://localhost:5000/userinfo/${item.userID._id}">${item.userID.userFirstName}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/userinfo/${item.userID._id}">${item.userID.userLastName}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/userinfo/${item.userID._id}">${item.userID.userUserName}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/userinfo/${item.userID._id}">${item.writeScore + 0}</a>
                    </td>
                    <td>
                        <a href="http://localhost:5000/userinfo/${item.userID._id}">${moment(item.CreatedAt).format("DD MMM YYYY")}</a>
                    </td>

 
                 </tr>
                `)
                .forEach(element => {
                    listElem += element
                });
            res.render("allUser", {
                Table: listElem
            })

        }
        // res.send(Arr)
    })
})

module.exports = Router


