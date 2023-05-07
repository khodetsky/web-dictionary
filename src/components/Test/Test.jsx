import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { SectionTitle, Container } from "./Test.styled";
import { QuestionContainer } from "../QuestionContainer/QuestionContainer";
import { getWordsList } from "../../redux/selectors";
import { EndTestBtn } from "../EndTestBtn/EndTestBtn";
import { NextQuestionBtn } from "../NextQuestionBtn/NextQuestionBtn";
import { clearResultsState, addResultsFromStorage } from "../../redux/resultsSlice";
import { remove, save, load } from "../storage";

export const Test = ({newTest}) => {
    const wordsList = useSelector(getWordsList);
    const dispatch = useDispatch();

    const [testedWords, setTestedWords] = useState([]);
    const [questionCount, setQuestionCount] = useState(1);

    useEffect(() => {
        if (newTest) {
            if (wordsList && wordsList.length > 0) {
                remove('answers');

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

                const shuffledWords = shuffle(returnChekedWords([]))

                save('testedWords', shuffledWords);
                save('questionCount', 1);
                setTestedWords(shuffledWords);
                dispatch(clearResultsState());
            }
        } else {
            const wordsFromStorage = load('testedWords');
            const countFromStorage = load('questionCount');
            const answersFromStorage = load('answers');

            setTestedWords(wordsFromStorage);
            setQuestionCount(countFromStorage);
            dispatch(addResultsFromStorage(answersFromStorage));
        }
    }, [newTest, wordsList, dispatch]);

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }

    return (
        <>
            <SectionTitle>Запитання {questionCount} з 10</SectionTitle>
            {
                testedWords.map((wordObj, index) => {
                    if ((index + 1) === questionCount) {
                        return (
                            <Container key={index}>
                                <QuestionContainer questionCount={questionCount} wordObj={wordObj} testedWords={testedWords} shuffleFn={shuffle} />
                                {questionCount !== 10
                                    ? (<NextQuestionBtn questionCount={questionCount} setQuestionCount={setQuestionCount} />)
                                    : (<EndTestBtn questionCount={questionCount} />)
                                } 
                            </Container>
                        )
                    } else {
                        return (<div key={index} style={{width: 0, height: 0}}></div>)
                    }
                })
            }
        </>
    )
}