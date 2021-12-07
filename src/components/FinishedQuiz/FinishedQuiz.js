import classes from './FinishedQuiz.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results)
        .reduce((total,key)=> {
            if(props.results[key] === "success") {
                total++
            }

            return total
        }, 0)
        console.log('successCount',successCount)
        console.log(props.results)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem, index) => {
                        console.log(quizItem)
                        const resultIcon = [
                            props.results[quizItem.id - 1]==='error' ?
                                <FontAwesomeIcon className={classes.error} icon={faTimes} />
                              :
                                <FontAwesomeIcon className={classes.success} icon={faCheck} />
                        ]
                        return (
                            <li key={index} className={props.results[quizItem.id]}>
                                <strong>{index + 1} </strong>.&nbsp;
                                {quizItem.question}
                                {resultIcon}
                            </li>
                        )
                    })
                }
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick ={props.onRetry} type="primary">Повторить</Button>
                <Button onClick ={props.onRetry} type="success">Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz