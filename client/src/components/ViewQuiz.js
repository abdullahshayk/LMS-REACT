import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../styles/ViewQuiz.css'
import {  Link } from "react-router-dom";



const api = new axios.create({
    baseURL: "http://localhost:3000",
});


const ViewQuiz = () => {

    const [quizzes, setquizzes] = useState([]);
    const params = useParams();
    const quizid = params.id;
    var questionarray=[];

    useEffect(() => {
        getData();


    }, [])

    const getData = () => {
        api.get(`/quiz/${quizid}`)
            .then(res => {
                setquizzes(res.data)

            })
    }

    const renderquestion =(quizQuestions)=>{

        for(let i=0 ; i<5;i++){
            if(quizQuestions[i]!=null){
                questionarray.push(quizQuestions[i])
            }
            else{
                continue;
            }
        }

        return(
    questionarray.map((question, index) => (

            <div className="quizQuestionsContainer">
                
                <span className="quizQuestions">Q{index + 1})&nbsp;&nbsp;&nbsp;{question}<hr /></span>

            </div>
    ))
        
    
    
        )

    }

    const deleteQuiz = (id) => {
        api.delete(`/quiz/${id}`)
            .then(res => {
                setquizzes(res)
                alert("deleted")
                

            })
    }

    const renderquiz = () => {
        return (
            quizzes.map((item, index) => (
                <div className="quizContainer">
                    <span className="quizTitle">{item.quizTitle}</span>
                    <br />
                    <span className="quizMarks">/{item.quizMarks}</span>
                    <br />
                    <br />
                    {renderquestion(item.quizQuestions)}
                    <br />
                    <span className="deadline">{item.deadline}</span>
                    <br /><br />
                    <Link 
                    onClick={()=>deleteQuiz(item._id)}
                    className="deletebtn"
                    to={'/quizzes/'}>
                Delete Quiz
            </Link>


                </div>
            ))


        )


    }




    return (
        <div>
            {renderquiz()}
           
        </div>
    );
}

export default ViewQuiz;