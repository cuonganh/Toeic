const examsModel = require('./examsModel');

var saveExam = (object, callback) => {
    examsModel.findOne({})
        .select('id')
        .sort({ id: -1 })
        .exec((err, doc) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                var id;
                if (doc && doc.id) {
                    id = doc.id + 1;
                } else {
                    id = 1;
                }
                object.id = id;
                examsModel.create(object, (err, doc) => {
                    if (err) {
                        console.log(err);
                        console.log('message', err.message);
                        callback(err);
                    } else {
                        callback(null, doc);
                    }
                })
            }
        })
}


var compareAnswer = (answerUser, examName, cb) => {
    examsModel.findOne({ name: examName })
        .exec((err, doc) => {
            if (err) {
                console.log(err);
                cb(err);
            } else {
                let i = 0;
                let a = 0; //số đáp án đúng
                var arrayAnswer = []; //các đáp án đúng
                doc.answers.forEach((trueAnswer) => {
                    if (trueAnswer == answerUser[i]) {
                        arrayAnswer.push('True');
                        a++;
                    } else {
                        arrayAnswer.push(trueAnswer);
                    }
                    i++;
                })
                var data = {
                    numberOfTrueAnswer: a,
                    arrayAnswer: arrayAnswer
                }
                return cb(null, data);
            }
        })
}

var getExamByName = (examName, cb) => {
    examsModel.findOne({ name: examName })
        .exec((err, doc) => {
            if (err) {
                console.log(err);
                return cb(err);
            } else {
                return cb(null, doc);
            }
        })
}

module.exports = {
    saveExam,
    compareAnswer,
    getExamByName
}