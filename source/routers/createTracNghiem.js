const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");
const requireAdmin = require("../middlewares/requireBoss")

Router.get("/createtracnghiem", requireAdmin, (req, res) => {
    res.render("createTracNghiem")
})

Router.post("/createtracnghiem", (req, res) => {
    let questionContent = req.body.questionContent
    let AnswerValue = req.body.AnswerValue
    let AnswerAContent = req.body.AnswerAContent
    let AnswerBContent = req.body.AnswerBContent
    let AnswerCContent = req.body.AnswerCContent
    let AnswerDContent = req.body.AnswerDContent
    FileController.createTracNghiem(questionContent, AnswerValue, AnswerAContent, AnswerBContent, AnswerCContent, AnswerDContent)
    res.redirect("http://localhost:5000/createtracnghiem")
})

module.exports = Router