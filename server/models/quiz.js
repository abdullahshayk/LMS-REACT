var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var quizSchema = new Schema({
    quizTitle: {
        type: String,
        required: true,
    },

    quizMarks: {
        type: Number,
        required: true,
    },

    quizQuestions: {
        type: [String],

    },

    deadline: {
        type: Date,
        required: true,
    },
    publishedDate: {
        type: Date,
        default: new Date(),
    },

});

module.exports = mongoose.model("Quiz", quizSchema);