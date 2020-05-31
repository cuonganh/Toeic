
const dataSchema = require("../models/dataSchema")

let creatUser = (FirstName, LastName, UserName, Password, Email, DoB, Phone, Address) => {
    let newUser = {
        userFirstName: FirstName,
        userLastName: LastName,
        userUserName: UserName,
        userPassword: Password,
        userEmail: Email,
        userPhone: Phone,
        userDoB: DoB,
        userAddress: Address
    }
    dataSchema.userInfo.create(newUser)
}

let createTracNghiem = (questionContent, AnswerValue, AnswerAContent, AnswerBContent, AnswerCContent, AnswerDContent) => {
    let newTracNghiem = {
        tnQuestionContent: questionContent,
        tnAnswer: {
            tnAnswerValue: AnswerValue,
            AnswerAContent: AnswerAContent,
            AnswerBContent: AnswerBContent,
            AnswerCContent: AnswerCContent,
            AnswerDContent: AnswerDContent

        }
    }
    dataSchema.tracnghiem.create(newTracNghiem)
}

let createDienTu = (questionContent, AnswerValue, AnswerAContent, AnswerBContent, AnswerCContent, AnswerDContent) => {
    let newDienTu = {
        dtQuestionContent: questionContent,
        dtAnswer: {
            dtAnswerValue: AnswerValue,
            AnswerAContent: AnswerAContent,
            AnswerBContent: AnswerBContent,
            AnswerCContent: AnswerCContent,
            AnswerDContent: AnswerDContent

        }
    }
    dataSchema.dientu.create(newDienTu)
}

const findUserByID = (userID, callback) => {
    dataSchema.userInfo.find({ _id: userID }, (err, data) => {
        callback(null, data)
    })
}

const getAllUser = (callback) => {
    dataSchema.userScore.find({})
        .populate({
            path: "userID", select: ["userFirstName", "userLastName", "userUserName"],
            model: "User"
        })
        .exec((err, docs) => {
            if (err) console.log(err)
            return callback(null, docs)
        })

}

const DeleteTracNghiem = (id, callback) => {
    dataSchema.tracnghiem.findByIdAndRemove(id, (err) => {
        if (err) console.log(err)
        callback(null)
    })
    console.log("Xoa")
}

const DeleteDienTu = (id, callback) => {
    dataSchema.dientu.findByIdAndRemove(id, err => {
        if (err) console.log(err)
        callback(null)
    })
    console.log("Xoa Dien Tu")
}

module.exports = {
    creatUser,
    createTracNghiem,
    createDienTu,
    findUserByID,
    getAllUser,
    DeleteTracNghiem,
    DeleteDienTu,
}
