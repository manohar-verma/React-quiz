import logo from './logo.svg';
import './App.css';
import React,{Component } from "react"
import QuizComponent from "./QuizComponent"
class App extends Component {
  render(){

    return (
      <div className="App">
       <QuizComponent />
      </div>
    );

  }
  
}

export default App;
