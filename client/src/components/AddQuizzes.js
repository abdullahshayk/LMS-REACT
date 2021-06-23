import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Addquiz.css'



const api = new axios.create({
    baseURL: "http://localhost:3000",
});


const AddQuizzes = () => {

    const [quizTitle, setquizTitle] = useState("");
    const [quizMarks, setquizMarks] = useState();
    const [quizQuestions, setquizQuestions] = useState([]);
    const [deadline, setdeadline] = useState("");
    const [totalquestion, settotalquestions] = useState(1);
    var questionarray=[];

    const validate = () => {
        if (!quizMarks ) {
            return false;
        }
        if (!quizTitle) {
            return false;
        }
        if (!quizQuestions) {
            return false;
        }

        if (!deadline) {
            return false;
        }

        

        return true;
    };

    const addquiz = async (e) => {
        e.preventDefault();

        if (validate()) {
            const quiz = {
                quizTitle: quizTitle,
                quizMarks: quizMarks,
                quizQuestions: quizQuestions,
                //2021-06-29 etc
                deadline: deadline
            };

            try {
                await api
                    .post("/quiz/addquiz", quiz)
                    .then(function (response) {
                        alert("Quiz added!")

                    });
            } catch (error) {
                alert("failed")
            }
        }

        else {
            alert("Problem....")

        }
    };

  




    return (
        <div className="addquizcontainer">

            <form>

                <div className="firstrow">
                    <div className="quizTitleadd">
                        <label className="quiztitlelabel">
                            Quiz Title:
                        </label>
                        <br />
                        <br />

                        <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Quiz Title"
                            onChange={(e) => setquizTitle(e.target.value)}
                        />
                    </div>
                    <br />
                    <br />
                    <br />


                    <div className="quizMarksadd">
                        <label class="quizmarkslabel">
                            Quiz Marks:
                        </label>
                        <p style={{display:"inline" , fontSize:"10px"}}> (number)</p>
                        <br />
                        <br />
                       
                        <input
                            type="test"
                            class="form-control"
                            placeholder="Enter Quiz Total Marks"
                            onChange={(e) => setquizMarks(e.target.value)}
                        />
                    </div>
                </div>
                <br />
                <br />
                <br />


                <div className="quizQuestionsadd">
                    <label class="quizquestionslabel">
                        Quiz Questions:
                    </label>


                    <br />
                    <br />

                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Question 1"
                        onChange={(e) => {
                            quizQuestions[0]=(e.target.value)
                        }}

                    />
                     <br />
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Question 2"
                        onChange={(e) => {
                            quizQuestions[1]=(e.target.value)
                        }}

                    />
                     <br />
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Question 3"
                        onChange={(e) => {
                            quizQuestions[2]=(e.target.value)
                        }}

                    />
                     <br />
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Question 4"
                        onChange={(e) => {
                            quizQuestions[3]=(e.target.value)
                        }}

                    />
                     <br />
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Question 5"
                        onChange={(e) => {
                            quizQuestions[4]=(e.target.value)
                        }}

                    />
                     <br />
                   
                 
                </div>
                <br />
                <br />
                <br />

                <div className="deadlineadd">
                    <label class="deadlinelabel">
                        Deadline
                    </label>
                    <p style={{display:"inline" , fontSize:"10px"}}> (year-month-date)</p>
                    <br />
                    <br />

                    <input
                        type="text"
                        class="form-control"
                        placeholder="Deadline Date"
                        onChange={(e) => setdeadline(e.target.value)}
                    />
                </div>
                <br />
                <br />







            
                    <button
                        type="submit"
                        class="btn-addquiz"
                        onClick={(e) => addquiz(e)}
                    >
                        Add quiz
                    </button>
              

            </form>

        </div>
    );
}

export default AddQuizzes;