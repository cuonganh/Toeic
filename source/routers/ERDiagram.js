const express = require("express");
const Router = express.Router();

Router.get("/ERDiagram", (req, res) => {
    res.render("ERDiagram")
})

module.exports = Router