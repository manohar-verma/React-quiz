import React,{Component} from "react";
import QuizQuestion from "./QuizQuestion"
import QuizEnd from "./QuizEnd"
let quizData=require("./quiz_data.json"); 
class QuizComponent extends Component{
  constructor(props)
  {
    super(props);
    this.state={quiz_position:1}
  } 
  showNextquestion()
  {
      this.setState((state)=>{
        return {
            quiz_position: state.quiz_position+1,
        }
      })
  } 
  handleResetClick()
  {
    this.setState((state)=>{
        return{
            quiz_position:1
        }
    })
  }
 render()
 {
     const isQEnd=this.state.quiz_position-1===quizData.quiz_questions.length
    return(
        <>
        <p>Here at quiz</p>
        {
            isQEnd? <QuizEnd resetClickhandler={this.handleResetClick.bind(this)}/> :
           <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position-1]} showNextQuestion={this.showNextquestion.bind(this)} />
        }
        </>
        
    )
 }
}
export default QuizComponent