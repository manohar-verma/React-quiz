import React,{Component} from "react"
import QuizQuestionButton from "./QuizQuestionButton"
class QuizQuestion extends Component{

    constructor(props)
    {
       super(props)
       this.state={incorrectAns:false}
    }

    handleClick(text_button)
    {
    
     if(text_button==this.props.quiz_question.answer)
     {
         this.props.showNextQuestion()
         this.setState({incorrectAns:false})
     }
     else
     {
       this.setState({
        incorrectAns:true
    })
     }
    }
    render(){
        return(
            <div className="main">
                <div className="question">
                    <p>{this.props.quiz_question.instruction_text}</p>
                </div>
                <div className="question-option">
                   <ul>
                     {
                         this.props.quiz_question.answer_options.map((option,index)=>{
                            
                            return(
                                <QuizQuestionButton  key={index} q_button_text={option} clickHandler={this.handleClick.bind(this)}/>
                            )

                         }
                        
                         )
                     }
                   </ul>
                </div>
                {this.state.incorrectAns?<p>Sorry, that's not right</p>:null}
            </div>
        )
    }
}
export default QuizQuestion