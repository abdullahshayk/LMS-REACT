import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/ViewQuizzes.css'
import {  Link } from "react-router-dom";



const api = new axios.create({
    baseURL: "http://localhost:3000",
});


const ViewQuizzes = () => {

    const [quizzes, setquizzes] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        api.get('/quiz')
            .then(res => {
                setquizzes(res.data)

            })
    }

    const renderlist = () => {
        return (
            quizzes.map((item, index) => (
                <div className="containerquizzes">
                    <span className="quiztitledets">{item.quizTitle}</span>
                    <span className="quizmarksdets">Total Marks: {item.quizMarks}</span>
                   <br />
                   <br />
                   <br />
                    <Link className="btndets" to={`/quiz/${item._id}`}>
                        View Quiz
                    </Link>
                    <span className="quizdeadlinedets">{item.deadline}</span>
                </div>
            ))


        )


    }




    return (
        <div>
            {renderlist()}
        </div>
    );
}

export default ViewQuizzes;