import React,{Component} from "react"
class QuizEnd extends Component{
    
    handleReset()
    {
        this.props.handleResetClick()
    }

    render()
    {
        return(
            <div>
                <p>Thanks</p>
                <a href="" onClick={this.handleReset.bind(this)}>Reset Quiz</a>
            </div>
        )
    }
}
export default QuizEnd