import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { Container, MainWord, ButtonsList } from "./QuestionContainer.styled";
import { TestButton } from "../TestButton/TestButton";
import { addResult } from "../../redux/resultsSlice";

export const QuestionContainer = ({ wordObj, testedWords, shuffleFn }) => {
    const dispatch = useDispatch();
    const [randomAnswers, setRandomAnswers] = useState(null);

    useEffect(() => {
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

        setRandomAnswers(answers);
    }, [wordObj, shuffleFn, testedWords])

    
    
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
        const btnsArr = Array.from(document.querySelectorAll('#answerBtn'));

        btnsArr.forEach(button => button.disabled = true);
        
        if ( e.currentTarget.innerText === wordObj.translation) {
                e.currentTarget.style.backgroundColor = '#41e21a';
                e.currentTarget.style.color = '#298612';
        } else {
            e.currentTarget.style.backgroundColor = '#e95555';
            e.currentTarget.style.color = '#9a1111';
        }

        const historyRecord = createHistiryRecord(wordObj, e.currentTarget.innerText);
        dispatch(addResult(historyRecord));
    }

    return (
        <Container>
            <MainWord>{wordObj.word}</MainWord>
            <ButtonsList>
                {randomAnswers && randomAnswers.map(obj => (
                    <li key={obj.translation}>
                        <TestButton handleBtnClick={onBtnClick} >{obj.translation}</TestButton>
                    </li>
                ))}
            </ButtonsList>
        </Container>
    )
}