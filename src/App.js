import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Layout>
        <Routes>
            <Route exact path="/auth" element={<Auth />} />
            <Route exact path="/quiz-creator" element={<QuizCreator />} />
            <Route exact path="/quiz/:id" element={<Quiz />} />
            <Route exact path="/" element={<QuizList />} />
        </Routes>
    </Layout>
  );
}

export default App;
