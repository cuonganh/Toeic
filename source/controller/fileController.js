
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
    checkDienTu,
    checkTracNghiem,
    getUserforAuth,
    findUserByName,
    createUserScore,
    findUserScore,
    findUserByID,
    getAllUser,
    getAllTracNghiem,
    getAllDienTu,
    DeleteTracNghiem,
    DeleteDienTu,
}
