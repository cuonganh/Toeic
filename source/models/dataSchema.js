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



var userInfo = mongoose.model("User", userSchema)


module.exports = {
    userInfo: userInfo,

}