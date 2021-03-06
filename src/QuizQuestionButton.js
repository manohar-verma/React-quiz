import React,{Component} from "react"
class QuizQuestionButton extends Component{

    handleClick()
    {
       this.props.clickHandler(this.props.q_button_text)
    }
    render()
    {
        return(
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.q_button_text}</button>
            </li>
        )
    }
}

export default QuizQuestionButton