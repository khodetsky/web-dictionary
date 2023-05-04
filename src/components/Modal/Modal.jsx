import { useEffect } from 'react';

import { Overlay, ModalStyles, Title, ResultText, ListStyled, TextContainer, AnswerWord } from "./Modal.styled";
import { WordContainer } from "../../components/WordContainer/WordContainer";

export const Modal = ({ data, onClose }) => {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        }
        
        window.addEventListener('keydown', handleKeyDown)
        return () => {
          window.removeEventListener('keydown', handleKeyDown)
        };
    }, [onClose]);

    const handleOverlayClck = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <Overlay onClick={handleOverlayClck}>
            <ModalStyles>
                <Title>Результати тесту</Title>
                <ListStyled>
                    {data.answersArr.map((answer, index) => (
                        <WordContainer key={index} wordObj={answer.questionWord}>
                            <TextContainer>
                                <p>Ваша відповідь <AnswerWord trueAnswer={answer.questionWord.translation === answer.answer}>{answer.answer}</AnswerWord></p>
                            </TextContainer>
                        </WordContainer>
                    ))}
                </ListStyled>
                <ResultText>Успішність {data.result}%</ResultText>
            </ModalStyles>
        </Overlay>
    )
}