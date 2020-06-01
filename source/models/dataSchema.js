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

//ma hoa password theo chuan bcrypt
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


var userInfo = mongoose.model("User", userSchema)
var userScore = mongoose.model("userScore", userScoreSchema)
var tracnghiem = mongoose.model("tracnghiem", tracnghiemSchema)
var dientu = mongoose.model("dientu", dientuSchema)

module.exports = {
    userInfo: userInfo,
    userScore: userScore,
    tracnghiem: tracnghiem,
    dientu: dientu,
}
