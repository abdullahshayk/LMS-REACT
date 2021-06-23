import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ViewQuizzes from "./components/ViewQuizzes";
import AddQuizzes from "./components/AddQuizzes";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ViewQuiz from "./components/ViewQuiz";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quizzes" component={ViewQuizzes} />
          <Route exact path="/addquiz" component={AddQuizzes} />
          <Route exact path="/quiz/:id" component={ViewQuiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
