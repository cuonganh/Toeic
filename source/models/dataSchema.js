const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    userFirstName: { type: String, required: true },
    userLastName: { type: String, required: true },
    userUserName: { type: String, required: true },
    userPassword: { type: String, required: true },
    userDoB: { type: String, required: true },
    userPhone: { type: Number },
    userEmail: { type: String, required: true },
    userAddress: { type: String, required: true },
    admin: { type: Boolean, default: false },
    test: { type: Boolean, default: true }
})

//ma hoa password theo chaun bcrypt
userSchema.pre("save", function (next) {
    if (!this.isModified("userPassword")) {
        return next()
    }
    try {
        const salt = bcrypt.genSaltSync(12);
        const hashPassword = bcrypt.hashSync(this.userPassword, salt);
        this.userPassword = hashPassword;
        next();
    } catch (error) {
        console.log(error);
        next();
    }
})

const userScoreSchema = new Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    listenScore: { type: Number },
    writeScore: { type: Number }
}, {
        timestamps: { createdAt: "CreatedAt" }
    })

const tracnghiemSchema = new Schema({
    tnQuestionContent: { type: String, required: true },
    tnAnswer: {
        tnAnswerValue: { type: String, require: true },
        AnswerAContent: { type: String, required: true },
        AnswerBContent: { type: String, required: true },
        AnswerCContent: { type: String, required: true },
        AnswerDContent: { type: String, required: true },

    }

})

const dientuSchema = new Schema({
    dtQuestionContent: { type: String, required: true },
    dtAnswer: {
        dtAnswerValue: { type: String, require: true },
        AnswerAContent: { type: String, required: true },
        AnswerBContent: { type: String, required: true },
        AnswerCContent: { type: String, required: true },
        AnswerDContent: { type: String, required: true },

    }
})

const baidocSchema = new Schema({
    bdParagraph: { type: String, required: true },
    bdQuestion: {
        Question1: {
            Q1QuestionContent: { type: String, require: true },
            Q1AnswerValue: { type: String, require: true },
            Q1AnswerAContent: { type: String, required: true },
            Q1AnswerBContent: { type: String, required: true },
            Q1AnswerCContent: { type: String, required: true },
            Q1AnswerDContent: { type: String, required: true },
        },
        Question2: {
            Q2QuestionContent: { type: String, require: true },
            Q2AnswerValue: { type: String, require: true },
            Q2AnswerAContent: { type: String, required: true },
            Q2AnswerBContent: { type: String, required: true },
            Q2AnswerCContent: { type: String, required: true },
            Q2AnswerDContent: { type: String, required: true },
        },
        Question3: {
            Q3QuestionContent: { type: String, require: true },
            Q3AnswerValue: { type: String, require: true },
            Q3AnswerAContent: { type: String, required: true },
            Q3AnswerBContent: { type: String, required: true },
            Q3AnswerCContent: { type: String, required: true },
            Q3AnswerDContent: { type: String, required: true },
        },
        Question4: {
            Q4QuestionContent: { type: String, require: true },
            Q4AnswerValue: { type: String, require: true },
            Q4AnswerAContent: { type: String, required: true },
            Q4AnswerBContent: { type: String, required: true },
            Q4AnswerCContent: { type: String, required: true },
            Q4AnswerDContent: { type: String, required: true },
        },
        Question5: {
            Q5QuestionContent: { type: String, require: true },
            Q5AnswerValue: { type: String, require: true },
            Q5AnswerAContent: { type: String, required: true },
            Q5AnswerBContent: { type: String, required: true },
            Q5AnswerCContent: { type: String, required: true },
            Q5AnswerDContent: { type: String, required: true },
        }
    }
})

var userInfo = mongoose.model("User", userSchema)
var userScore = mongoose.model("userScore", userScoreSchema)
var tracnghiem = mongoose.model("tracnghiem", tracnghiemSchema)
var dientu = mongoose.model("dientu", dientuSchema)
var baidoc = mongoose.model("baidoc", baidocSchema)

module.exports = {
    userInfo: userInfo,
    userScore: userScore,
    tracnghiem: tracnghiem,
    dientu: dientu,
    baidoc: baidoc
}