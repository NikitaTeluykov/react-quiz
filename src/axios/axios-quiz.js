import axios from "axios";

export default axios.create({
    baseURL: 'https://react-quiz-5f44c-default-rtdb.europe-west1.firebasedatabase.app/'
})