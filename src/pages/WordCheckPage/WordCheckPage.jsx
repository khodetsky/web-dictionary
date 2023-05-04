import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { MainSection, SectionTitle, Container } from "./WordCheckPage.styled";
import { QuestionContainer } from "../../components/QuestionContainer/QuestionContainer";
import { getWordsList } from "../../redux/selectors";
import { EndTestBtn } from "../../components/EndTestBtn/EndTestBtn";
import { NextQuestionBtn } from "../../components/NextQuestionBtn/NextQuestionBtn";

export const WordCheckPage = () => {
    const wordsList = useSelector(getWordsList);

    const [testedWords, setTestedWords] = useState([]);
    const [questionCount, setQuestionCount] = useState(1);

    useEffect(() => {
        if (wordsList && wordsList.length > 0) {

            function returnChekedWords(array) {
                let checkedWords = wordsList.reduce((acc, word) => {
                    let random = Math.floor(Math.random() * 3);

                    if (acc.length < 10 && !acc.includes(word) && random === 2) {
                        acc.push(word);
                        return acc;
                    } else {
                        return acc;
                    }
                }, array)

                while (checkedWords.length !== 10) {
                    checkedWords = returnChekedWords(checkedWords)
                }

                return checkedWords;
            }

            setTestedWords(shuffle(returnChekedWords([])));
        }
    }, [wordsList]);

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }

    return (
        <MainSection>
            <SectionTitle>Запитання {questionCount} з 10</SectionTitle>
            {
                testedWords.map((wordObj, index) => {
                    if ((index + 1) === questionCount) {
                        return (
                            <Container key={index}>
                                <QuestionContainer  wordObj={wordObj} testedWords={testedWords} shuffleFn={shuffle} />
                                {questionCount !== 10
                                    ? (<NextQuestionBtn questionCount={questionCount} setQuestionCount={setQuestionCount} />)
                                    : (<EndTestBtn questionCount={questionCount} />)} 
                            </Container>
                        )
                    } else {
                        return (<div key={index} style={{width: 0, height: 0}}></div>)
                    }
                })
            }
        </MainSection>
    )
}