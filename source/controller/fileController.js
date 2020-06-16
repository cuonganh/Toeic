
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
let createBaiDoc = (
    bdParagraph, Q1QuestionContent, Q1AnswerValue, Q1AnswerAContent, Q1AnswerBContent, Q1AnswerCContent, Q1AnswerDContent,
    Q2QuestionContent, Q2AnswerValue, Q2AnswerAContent, Q2AnswerBContent, Q2AnswerCContent, Q2AnswerDContent,
    Q3QuestionContent, Q3AnswerValue, Q3AnswerAContent, Q3AnswerBContent, Q3AnswerCContent, Q3AnswerDContent,
    Q4QuestionContent, Q4AnswerValue, Q4AnswerAContent, Q4AnswerBContent, Q4AnswerCContent, Q4AnswerDContent,
    Q5QuestionContent, Q5AnswerValue, Q5AnswerAContent, Q5AnswerBContent, Q5AnswerCContent, Q5AnswerDContent
) => {
    let newBaiDoc = {
        bdParagraph: bdParagraph,
        bdQuestion: {
            Question1: {
                Q1QuestionContent: Q1QuestionContent,
                Q1AnswerValue: Q1AnswerValue,
                Q1AnswerAContent: Q1AnswerAContent,
                Q1AnswerBContent: Q1AnswerBContent,
                Q1AnswerCContent: Q1AnswerCContent,
                Q1AnswerDContent: Q1AnswerDContent
            },
            Question2: {
                Q2QuestionContent: Q2QuestionContent,
                Q2AnswerValue: Q2AnswerValue,
                Q2AnswerAContent: Q2AnswerAContent,
                Q2AnswerBContent: Q2AnswerBContent,
                Q2AnswerCContent: Q2AnswerCContent,
                Q2AnswerDContent: Q2AnswerDContent
            },
            Question3: {
                Q3QuestionContent: Q3QuestionContent,
                Q3AnswerValue: Q3AnswerValue,
                Q3AnswerAContent: Q3AnswerAContent,
                Q3AnswerBContent: Q3AnswerBContent,
                Q3AnswerCContent: Q3AnswerCContent,
                Q3AnswerDContent: Q3AnswerDContent
            },
            Question4: {
                Q4QuestionContent: Q4QuestionContent,
                Q4AnswerValue: Q4AnswerValue,
                Q4AnswerAContent: Q4AnswerAContent,
                Q4AnswerBContent: Q4AnswerBContent,
                Q4AnswerCContent: Q4AnswerCContent,
                Q4AnswerDContent: Q4AnswerDContent
            },
            Question5: {
                Q5QuestionContent: Q5QuestionContent,
                Q5AnswerValue: Q5AnswerValue,
                Q5AnswerAContent: Q5AnswerAContent,
                Q5AnswerBContent: Q5AnswerBContent,
                Q5AnswerCContent: Q5AnswerCContent,
                Q5AnswerDContent: Q5AnswerDContent
            }
        }
    }
    dataSchema.baidoc.create(newBaiDoc)
}

let find10DienTu = (callback) => {
    dataSchema.dientu.find({})
        .limit(20)
        .exec((err, docs) => {
            if (err) console.log(err)
            return callback(null, docs)
        })
}

let find10TracNghiem = (callback) => {
    dataSchema.tracnghiem.find({})
        .limit(20)
        .exec((err, docs) => {
            if (err) console.log(err)
            return callback(null, docs)
        })
}

let find2BaiDoc = (callback) => {
    dataSchema.baidoc.find({})
        .limit(2)
        .exec((err, docs) => {
            if (err) console.log(err)
            return callback(null, docs)
        })
}

let checkDienTu = (AnsArr, callback) => {
    dataSchema.dientu.find({}, (err, docs) => {
        let correctAnswer = 0
        let i = 0 // cac phan tu cua mang AnsArr
        for (i = 0; i < docs.length; i++) {
            for (j = 0; j < AnsArr.length; j++) {
                if (docs[i]._id == AnsArr[j]._id) {
                    if (docs[i].dtAnswer.dtAnswerValue == AnsArr[j].answer) {
                        correctAnswer++
                    }
                }
            }
            // console.log(docs[i])
        }
        return callback(null, correctAnswer - 1)
    })
}

let checkTracNghiem = (AnsArr, callback) => {
    dataSchema.tracnghiem.find({}, (err, docs) => {
        let correctAnswer = 0
        let i = 0 // cac phan tu cua mang AnsArr
        for (i = 0; i < docs.length; i++) {
            for (j = 0; j < AnsArr.length; j++) {
                if (docs[i]._id == AnsArr[j]._id) {
                    if (docs[i].tnAnswer.tnAnswerValue == AnsArr[j].answer) {
                        correctAnswer++
                    }
                }
            }
            // console.log(docs[i])
        }
        return callback(null, correctAnswer)
    })
}

let checkBaiDoc = (id, Q1Value, Q2Value, Q3Value, Q4Value, Q5Value, callback) => {
    dataSchema.baidoc.find({ _id: id }, (err, docs) => {
        let correctAnswer = 0
        if (docs[0].bdQuestion.Question1.Q1AnswerValue == Q1Value) correctAnswer++
        if (docs[0].bdQuestion.Question2.Q2AnswerValue == Q2Value) correctAnswer++
        if (docs[0].bdQuestion.Question3.Q3AnswerValue == Q3Value) correctAnswer++
        if (docs[0].bdQuestion.Question4.Q4AnswerValue == Q4Value) correctAnswer++
        if (docs[0].bdQuestion.Question5.Q5AnswerValue == Q5Value) correctAnswer++
        return callback(null, correctAnswer)
    })
}

let createUserScore = (id, writeScore, ) => {
    let newUserScore = {
        userID: id,
        writeScore: writeScore
    }
    dataSchema.userScore.create(newUserScore)
}

let getUserforAuth = (username) => new Promise((resolve, reject) => {
    dataSchema.userInfo
        .findOne({ userUserName: username })
        .select("userUserName userPassword _id admin test")
        .then(user => resolve(user))
        .catch(err => reject(err))
})

async function findUserByName(data) {
    try {
        const doc = await dataSchema.userInfo.findOne({ userUserName: data });
        return doc;
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function findUserScore1(id) {
    try {
        const doc = await dataSchema.userScore.find({ userID: id })
    } catch (error) {
        console.log(error)
        return error
    }
}

const findUserScore = (userID, callback) => {
    dataSchema.userScore.find({ userID: userID }, (err, data) => {
        callback(null, data)
    })
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

const getAllTracNghiem = (callback) => {
    dataSchema.tracnghiem.find({}, (err, docs) => {
        callback(err, docs)
    })
}

const getAllDienTu = (callback) => {
    dataSchema.dientu.find({}, (err, docs) => {
        callback(err, docs)
    })
}

const getAllBaiDoc = (callback) => {
    dataSchema.baidoc.find({}, (err, docs) => {
        callback(err, docs)
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

const DeleteBaiDoc = (id, callback) => {
    dataSchema.baidoc.findByIdAndRemove(id, err => {
        if (err) console.log(err)
        callback(null)
    })
    console.log("Xoa Bai Doc")
}



module.exports = {
    creatUser,
    createTracNghiem,
    createDienTu,
    createBaiDoc,
    find10DienTu,
    checkDienTu,
    find10TracNghiem,
    checkTracNghiem,
    find2BaiDoc,
    checkBaiDoc,
    getUserforAuth,
    findUserByName,
    createUserScore,
    findUserScore,
    findUserByID,
    getAllUser,
    getAllTracNghiem,
    getAllDienTu,
    getAllBaiDoc,
    DeleteTracNghiem,
    DeleteDienTu,
    DeleteBaiDoc
}
