import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { Container, MainWord, ButtonsList } from "./QuestionContainer.styled";
import { TestButton } from "../TestButton/TestButton";
import { addResult } from "../../redux/resultsSlice";
import { getTestResults } from "../../redux/selectors";
import { addMoreData, save, load } from "../storage";

export const QuestionContainer = ({ questionCount, wordObj, testedWords, shuffleFn }) => {
    const dispatch = useDispatch();
    const answersList = useSelector(getTestResults);

    const [randomAnswers, setRandomAnswers] = useState([]);
    const [buttonsArr, setButtonsArr] = useState([]);


    useEffect(() => {
        if (answersList.length !== questionCount) {
            function returnAuswersArr(array) {
                let randomAnswers = testedWords.reduce((acc, word) => {
                    let random = Math.floor(Math.random() * 2);
                
                    if (acc.length < 4 && !acc.includes(word) && random === 1) {
                        acc.push(word);
                        return acc;
                    } else {
                        return acc;
                    }
                }, array)
            
                while (randomAnswers.length !== 4) {
                    randomAnswers = returnAuswersArr(randomAnswers)
                }
            
                return randomAnswers;
            }

            const answers = shuffleFn(returnAuswersArr([wordObj]));
            save('randomAnswers', answers)
            setRandomAnswers(answers);
        } else {
            const arrOfRandomAnswers = load('randomAnswers');
            setRandomAnswers(arrOfRandomAnswers);
        }
    }, [wordObj, shuffleFn, testedWords, answersList, questionCount]);

    useEffect(() => {
        if (buttonsArr.length > 0 && answersList.length === questionCount) {

            buttonsArr.forEach(button => {
                button.disabled = true;

                if (button.innerText === wordObj.translation) {
                    if (button.innerText === answersList[answersList.length - 1].answer) {
                        button.style.backgroundColor = '#41e21a';
                        button.style.color = '#298612';
                    }
                } else {
                    if (button.innerText === answersList[answersList.length - 1].answer) {
                        button.style.backgroundColor = '#e95555';
                        button.style.color = '#9a1111';
                    }
                }
            });
        }
    
    }, [buttonsArr, answersList, questionCount, wordObj]);
    
    function createHistiryRecord(wordObjForCopy, value) {
        let answerObj = {questionWord: {}};

        let keysArr = Object.keys(wordObjForCopy);
        for (let key of keysArr) {
            answerObj.questionWord[key] = wordObjForCopy[key]
        }

        answerObj.answer = value;
        return answerObj;
    }

    function onBtnClick(e) {
        const historyRecord = createHistiryRecord(wordObj, e.currentTarget.innerText);

        addMoreData('answers', historyRecord);
        dispatch(addResult(historyRecord));
    }

    return (
        <Container>
            <MainWord>{wordObj.word}</MainWord>
            <ButtonsList >
                { randomAnswers.map(obj => (
                    <li  key={obj.translation}>
                        <TestButton setButtonsArr={setButtonsArr} handleBtnClick={onBtnClick} >{obj.translation}</TestButton>
                    </li>
                ))}
            </ButtonsList>
        </Container>
    )
}