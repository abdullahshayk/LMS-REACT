var Quiz = require("../models/quiz");
var express = require('express');
var router = express.Router();

router.get("/",
    //authenticate.verifyUser,
    function (req, res, next) {
        Quiz.find({}, function (error, body) {
            if (error) {
                return res.json({ Error: error });
            }
            return res.json(body);
        });
    });

router.post(
    "/addquiz",
    function (req, res, next) {
        Quiz.create(
            {
                quizTitle: req.body.quizTitle,
                quizMarks: req.body.quizMarks,
                quizQuestions: req.body.quizQuestions,
                deadline: req.body.deadline,
                publishedDate: req.body.publishedDate
            },
            function (error, quiz) {
                if (error) {
                    return res.json({ Error: error });
                }
                return res.json({ Success: "Quiz successfully Added" });
            }
        );
    }
);

  //get a particular quiz
router.get(
    "/:id",
    function (req, res, next) {
      Quiz.find(
        { _id: req.params.id },
        function (error, quiz) {
          if (error) {
            console.log(req.params.id);
            return res.json({ Error: error });
          }
          console.log(req.params.id);
          return res.json(quiz);
        }
      );
    }
  );
router.delete(
    "/:id",
    function (req, res, next) {
      Quiz.deleteOne(
        { _id: req.params.id },
        function (error, quiz) {
          if (error) {
            console.log(req.params.id);
            return res.json({ Error: error });
          }
          console.log(req.params.id);
          return res.json("Quiz Deleted!");
        }
      );
    }
  );


module.exports = router;