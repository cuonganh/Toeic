const express = require("express");
const Router = express.Router();
const FileController = require("../controller/fileController");
const requireAdmin = require("../middlewares/requireBoss")
const moment = require("moment")

Router.get("/tracnghiem", requireAdmin, (req, res) => {
    FileController.getAllTracNghiem((err, docs) => {
        let tracnghiem = docs
        let questionType = "trắc nghiệm"
        let listElem = ""
        tracnghiem.map((item, index) =>
            `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>
                 ${item.tnQuestionContent}
            </td>
            <td>
                ${item.tnAnswer.tnAnswerValue}
            </td>
            <td>
                ${item.tnAnswer.AnswerAContent}
            </td>
            <td>
                ${item.tnAnswer.AnswerBContent}
            </td>
            <td>
                ${item.tnAnswer.AnswerCContent}
            </td>
            <td>
                ${item.tnAnswer.AnswerDContent}
            </td>
            <td>
                <a href="" >Sửa</a>, <a href="http://localhost:5000/allquestions/tracnghiem/${item._id}/delete" >Xóa</a>
            </td>
            
        </tr>
        `).forEach(e => {
                listElem += e
            })

        res.render("questions", {
            QuestionType: questionType,
            Table: listElem
        })
    })

})

Router.get("/dientu", requireAdmin, (req, res) => {
    FileController.getAllDienTu((err, docs) => {
        let dientu = docs
        let questionType = "điền từ"
        let listElem = ""
        dientu.map((item, index) =>
            `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>
                ${item.dtQuestionContent}
            </td>
            <td>
                ${item.dtAnswer.dtAnswerValue}
            </td>
            <td>
                ${item.dtAnswer.AnswerAContent}
            </td>
            <td>
                ${item.dtAnswer.AnswerBContent}
            </td>
            <td>
                ${item.dtAnswer.AnswerCContent}
            </td>
            <td>
                ${item.dtAnswer.AnswerDContent}
            </td>
            <td>
                <a href="" >Sửa</a>, <a href="http://localhost:5000/allquestions/dientu/${item._id}/delete" >Xóa</a>
            </td>
            
        </tr>
    `).forEach(e => {
                listElem += e
            })
        res.render("questions", {
            QuestionType: questionType,
            Table: listElem
        })
    })

})

Router.get("/baidoc", requireAdmin, (req, res) => {
    FileController.getAllBaiDoc((err, docs) => {
        let baidoc = docs
        let listElem = ""
        baidoc.map((item, index) =>
            `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Câu hỏi  <a href="" >          Sửa</a>, <a href="http://localhost:5000/allquestions/baidoc/${item._id}/delete"" >       Xóa</a></th>
            
                        
                    </tr>
                </thead>
                <tbody>
                    <th scope="row">${index + 1}</th>
                    <td>
                        ${item.bdParagraph}
                    </td
                   
                </tbody>
            </table>
            <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Câu hỏi</th>
                    <th scope="col">Đáp án đúng</th>
                    <th scope="col">Câu trả lời A</th>
                    <th scope="col">Câu trả lời B</th>
                    <th scope="col">Câu trả lời C</th>
                    <th scope="col">Câu trả lời D</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${index + 1}.1</th>
                    <th scope="row">${item.bdQuestion.Question1.Q1QuestionContent}</th>
                    <th scope="row">${item.bdQuestion.Question1.Q1AnswerValue}</th>
                    <th scope="row">${item.bdQuestion.Question1.Q1AnswerAContent}</th>
                    <th scope="row">${item.bdQuestion.Question1.Q1AnswerBContent}</th>
                    <th scope="row">${item.bdQuestion.Question1.Q1AnswerCContent}</th>
                    <th scope="row">${item.bdQuestion.Question1.Q1AnswerDContent}</th>
                </tr>
                <tr>
                    <th scope="row">${index + 1}.2</th>
                    <th scope="row">${item.bdQuestion.Question2.Q2QuestionContent}</th>
                    <th scope="row">${item.bdQuestion.Question2.Q2AnswerValue}</th>
                    <th scope="row">${item.bdQuestion.Question2.Q2AnswerAContent}</th>
                    <th scope="row">${item.bdQuestion.Question2.Q2AnswerBContent}</th>
                    <th scope="row">${item.bdQuestion.Question2.Q2AnswerCContent}</th>
                    <th scope="row">${item.bdQuestion.Question2.Q2AnswerDContent}</th>
                </tr>
                <tr>
                    <th scope="row">${index + 1}.3</th>
                    <th scope="row">${item.bdQuestion.Question3.Q3QuestionContent}</th>
                    <th scope="row">${item.bdQuestion.Question3.Q3AnswerValue}</th>
                    <th scope="row">${item.bdQuestion.Question3.Q3AnswerAContent}</th>
                    <th scope="row">${item.bdQuestion.Question3.Q3AnswerBContent}</th>
                    <th scope="row">${item.bdQuestion.Question3.Q3AnswerCContent}</th>
                    <th scope="row">${item.bdQuestion.Question3.Q3AnswerDContent}</th>
                </tr>
                <tr>
                    <th scope="row">${index + 1}.4</th>
                    <th scope="row">${item.bdQuestion.Question4.Q4QuestionContent}</th>
                    <th scope="row">${item.bdQuestion.Question4.Q4AnswerValue}</th>
                    <th scope="row">${item.bdQuestion.Question4.Q4AnswerAContent}</th>
                    <th scope="row">${item.bdQuestion.Question4.Q4AnswerBContent}</th>
                    <th scope="row">${item.bdQuestion.Question4.Q4AnswerCContent}</th>
                    <th scope="row">${item.bdQuestion.Question4.Q4AnswerDContent}</th>
                </tr>
                <tr>
                    <th scope="row">${index + 1}.5</th>
                    <th scope="row">${item.bdQuestion.Question5.Q5QuestionContent}</th>
                    <th scope="row">${item.bdQuestion.Question5.Q5AnswerValue}</th>
                    <th scope="row">${item.bdQuestion.Question5.Q5AnswerAContent}</th>
                    <th scope="row">${item.bdQuestion.Question5.Q5AnswerBContent}</th>
                    <th scope="row">${item.bdQuestion.Question5.Q5AnswerCContent}</th>
                    <th scope="row">${item.bdQuestion.Question5.Q5AnswerDContent}</th>
                </tr>
                
            </tbody>
            </table>
    `).forEach(e => {
                listElem += e
            })

        res.render("baidoc", {
            Table: listElem
        })

    })

})

Router.get("/tracnghiem/:id/delete", requireAdmin, (req, res) => {
    let id = req.params.id
    console.log(id)
    FileController.DeleteTracNghiem(id, (err) => {
        if (err) console.log(err)
        res.redirect("http://localhost:5000/allquestions/tracnghiem")
    })

})

Router.get("/dientu/:id/delete", requireAdmin, (req, res) => {
    let id = req.params.id
    FileController.DeleteDienTu(id, (err) => {
        if (err) console.log(err)
        res.redirect("http://localhost:5000/allquestions/dientu")
    })
})

Router.get("/baidoc/:id/delete", requireAdmin, (req, res) => {
    let id = req.params.id
    FileController.DeleteBaiDoc(id, err => {
        if (err) console.log(err)
        res.redirect("http://localhost:5000/allquestions/baidoc")
    })
})


module.exports = Router
