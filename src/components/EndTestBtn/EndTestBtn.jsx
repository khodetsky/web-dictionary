import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { addActivity } from "../../redux/activityStorySlice";
import { clearResultsState } from "../../redux/resultsSlice";
import { getTestResults } from "../../redux/selectors";
import { Button } from "./EndTestBtn.styled";

export const EndTestBtn = ({questionCount}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const answersList = useSelector(getTestResults);

    const initNotifixParams = {
        position: 'center-top',
        distance: '70px',
        timeout: 3000,
        fontSize: '15px',
        width: '350px',
        pauseOnHover: true,
    };

    function handleEndTest() {
        if (answersList.length < questionCount) {
            Notify.failure('Оберіть один із варіантів відповіді', initNotifixParams);
        } else {
            const date = new Date().toLocaleString();
            const correctAnswers = answersList.reduce((sum, elem) =>
                elem.answer === elem.questionWord.translation ? sum + 1 : sum
                , 0);
            const testResult = {
                date,
                result: correctAnswers * 10,
                answersArr: answersList,
            }

            dispatch(addActivity(testResult));
            dispatch(clearResultsState());
            navigate("/word-check/results", { replace: true, state: {testEnded: true} });
        }
    }

    return (
        <Button type='button' onClick={handleEndTest}>Закінчити тест</Button>
    )
}