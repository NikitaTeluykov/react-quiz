import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";

const QuizList = (props) => {
    const renderQuizes = () => {
        return [1,2,3].map((quiz, index)=> {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>
                        Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    return (
        <div className={classes.QuizList}>
            <h1>Список тестов</h1>

            <ul>
                {renderQuizes()}
            </ul>
        </div>
    )
}
export default QuizList