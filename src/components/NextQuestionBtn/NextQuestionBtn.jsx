import { useSelector } from "react-redux";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Button } from "./NextQuestionBtn.styled";
import { getTestResults } from "../../redux/selectors";

export const NextQuestionBtn = ({ questionCount, setQuestionCount }) => {
    const answersList = useSelector(getTestResults);

    const initNotifixParams = {
        position: 'center-top',
        distance: '70px',
        timeout: 3000,
        fontSize: '15px',
        width: '350px',
        pauseOnHover: true,
    };

    function increaseQuestionCount() {
        if (answersList.length < questionCount) {
            Notify.failure('Оберіть один із варіантів відповіді', initNotifixParams);
        } else {
            setQuestionCount(prev => prev + 1);
        }
    }

    return (
        <Button type='button' onClick={increaseQuestionCount}>Наступне запитання</Button>
    )
}