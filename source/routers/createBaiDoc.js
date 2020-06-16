const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");
const requireAdmin = require("../middlewares/requireBoss")


Router.get("/createbaidoc", requireAdmin, (req, res) => {
    res.render("createBaiDoc")
})

Router.post("/createbaidoc", (req, res) => {
    let bdParagraph = req.body.bdParagraph

    let Q1QuestionContent = req.body.Q1QuestionContent
    let Q1AnswerValue = req.body.Q1AnswerValue
    let Q1AnswerAContent = req.body.Q1AnswerAContent
    let Q1AnswerBContent = req.body.Q1AnswerBContent
    let Q1AnswerCContent = req.body.Q1AnswerCContent
    let Q1AnswerDContent = req.body.Q1AnswerDContent

    let Q2QuestionContent = req.body.Q2QuestionContent
    let Q2AnswerValue = req.body.Q2AnswerValue
    let Q2AnswerAContent = req.body.Q2AnswerAContent
    let Q2AnswerBContent = req.body.Q2AnswerBContent
    let Q2AnswerCContent = req.body.Q2AnswerCContent
    let Q2AnswerDContent = req.body.Q2AnswerDContent

    let Q3QuestionContent = req.body.Q3QuestionContent
    let Q3AnswerValue = req.body.Q3AnswerValue
    let Q3AnswerAContent = req.body.Q3AnswerAContent
    let Q3AnswerBContent = req.body.Q3AnswerBContent
    let Q3AnswerCContent = req.body.Q3AnswerCContent
    let Q3AnswerDContent = req.body.Q3AnswerDContent

    let Q4QuestionContent = req.body.Q4QuestionContent
    let Q4AnswerValue = req.body.Q4AnswerValue
    let Q4AnswerAContent = req.body.Q4AnswerAContent
    let Q4AnswerBContent = req.body.Q4AnswerBContent
    let Q4AnswerCContent = req.body.Q4AnswerCContent
    let Q4AnswerDContent = req.body.Q4AnswerDContent

    let Q5QuestionContent = req.body.Q5QuestionContent
    let Q5AnswerValue = req.body.Q5AnswerValue
    let Q5AnswerAContent = req.body.Q5AnswerAContent
    let Q5AnswerBContent = req.body.Q5AnswerBContent
    let Q5AnswerCContent = req.body.Q5AnswerCContent
    let Q5AnswerDContent = req.body.Q5AnswerDContent
    FileController.createBaiDoc(
        bdParagraph, Q1QuestionContent, Q1AnswerValue, Q1AnswerAContent, Q1AnswerBContent, Q1AnswerCContent, Q1AnswerDContent,
        Q2QuestionContent, Q2AnswerValue, Q2AnswerAContent, Q2AnswerBContent, Q2AnswerCContent, Q2AnswerDContent,
        Q3QuestionContent, Q3AnswerValue, Q3AnswerAContent, Q3AnswerBContent, Q3AnswerCContent, Q3AnswerDContent,
        Q4QuestionContent, Q4AnswerValue, Q4AnswerAContent, Q4AnswerBContent, Q4AnswerCContent, Q4AnswerDContent,
        Q5QuestionContent, Q5AnswerValue, Q5AnswerAContent, Q5AnswerBContent, Q5AnswerCContent, Q5AnswerDContent
    )
    res.redirect("http://localhost:5000/createbaidoc")
})

module.exports = Router