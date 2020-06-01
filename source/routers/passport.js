const passport = require('passport');
const mongoose = require('mongoose');

const LocalStrategy = require('passport-local').Strategy;
const dataSchema = require("../models/dataSchema")
const fileController = require("../controller/fileController");
const bcrypt = require('bcrypt');
passport.serializeUser((user, done) => {
  console.log('user rrrr ', user.id);
  done(null, user.id);
});

passport.deserializeUser((_id, done) => {
  dataSchema.userInfo.findById(_id).then(user => {
    done(null, user);
  });
});


passport.use(new LocalStrategy(
  async (username, password, done) => {
    const data = await fileController.findUserByName(username);
    if (data) {
      console.log(data);
      let result = bcrypt.compareSync(password, data.userPassword);
      if (result) {
        console.log("Đúng pass");
        return done(null, data);
      } else {
        console.log("Sai pass");
        return done(null, false);
      }
    } else {
      console.log("Không tìm thấy");
      return done(null, false);
    }
  }
))


// bcrypt.compare(password, data.userPassword, (err, res) => {
//   if (res) {
//     console.log("Đúng pass");
//     return done(null, data);
//   } else {
//     console.log("Sai pass");
//     return done(null, false);
//   }
// })