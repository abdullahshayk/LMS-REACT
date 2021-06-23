import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import "../styles/NavBar.css";


const Navbar = (props) => {

    return (
        <div className="navbar">
            <header className="header">
                <h1 >COMSATS University, Islamabad</h1>
                <h2 >Teacher Portal</h2>
            </header>

            <div>
                <ul className="bar">
                    <li className="barItems">

                        <Link to="/">Home</Link>
                    </li>
                    <li className="barItems">
                        <Link to="/quizzes">Quizzes</Link>
                    </li>
                    <li className="barItems">
                        <Link to="/addquiz">Add Quiz</Link>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Navbar;
