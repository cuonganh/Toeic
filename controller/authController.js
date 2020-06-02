const dataSchema = require("../models/dataSchema")
const fileController = require("./fileController")
const bcrypt = require("bcrypt")



const login = (username, password) => new Promise((resolve, reject) => {
    fileController.getUserforAuth(username)
        .then(user => {
            if (!user || !user.userPassword) {
                reject({
                    status: 400,
                    err: "Incorect Username"
                })
            } else {
                try {
                    const result = bcrypt.compareSync(password, data.userPassword);
                    if (result) {
                        resolve({ username: user.userUserName, id: user._id, admin: user.admin, test: user.test })
                    } else {
                        reject({
                            status: 400,
                            err: "Incorect Password"
                        })
                    }
                } catch (error) {
                    reject({
                        status: 501,
                        err: error
                    })
                }
            }
        })
        .catch(err => reject({
            status: 501,
            err: err
        }))
});

module.exports = {
    login
}