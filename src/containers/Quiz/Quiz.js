import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import axios from "../../axios/axios-quiz";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../store/actions/quiz";

class Quiz extends Component {
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  }

  async componentDidMount() {
    this.props.fetchQuizById('-Mqxw6ioqVKXzL0eZ69j')
    console.log("Props", this.props)
  }

  componentWillUnmount() {
    this.props.retryQuiz();
  }

  render() {

    console.log("Props", this.props)
    console.log(this.props.quiz.activeQuestion)
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {
            this.props.quiz.isFinished
             ? <FinishedQuiz
                  results={this.props.quiz.results}
                  quiz={this.props.quiz.quiz}
                  onRetry={this.props.retryQuiz}
                />
             : <ActiveQuiz
                answers={this.props.quiz.quiz[this.props.quiz.activeQuestion].answers}
                question={this.props.quiz.quiz[this.props.quiz.activeQuestion].question}
                onAnswerClick={this.props.quizAnswerClick}
                quizLength={this.props.quiz.length}
                answerNumber={this.props.quiz.activeQuestion + 1}
                state={this.props.quiz.answerState}
              />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

    quiz: state.quiz
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick()),
    retryQuiz: () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)