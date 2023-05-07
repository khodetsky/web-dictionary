import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { getHistoryList } from "../../redux/selectors";
import { MainSection, SectionTitle, ResultText, ListStyled, TextContainer, AnswerWord } from "./ResultsPage.styled";
import { WordContainer } from "../../components/WordContainer/WordContainer";

export const ResultsPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const allAnswers = useSelector(getHistoryList);
    
    useEffect(() => {
        if (!location.state?.testEnded) {
            navigate("/", { replace: true });
        }
    }, [navigate, location])

    return (
        <MainSection>
            <SectionTitle>Результати тесту</SectionTitle>
            <ListStyled>
                {allAnswers[0].answersArr.map((answer, index) => (
                    <WordContainer key={index} wordObj={answer.questionWord}>
                        <TextContainer>
                            <p>Ваша відповідь <AnswerWord trueAnswer={answer.questionWord.translation === answer.answer}>{answer.answer}</AnswerWord></p>
                        </TextContainer>
                    </WordContainer>
                ))}
            </ListStyled>
            <ResultText>Успішність {allAnswers[0].result}%</ResultText>
        </MainSection>
    )
}