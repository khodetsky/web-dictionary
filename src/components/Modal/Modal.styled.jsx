import styled from "styled-components";

export const ModalStyles = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 700px;
    height: calc(100vh - 80px);
    border-radius: 15px;
    padding: 20px 30px;
    background-color: #f1f3f4;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.2px;
    color: #21293d;

    margin-bottom: 20px;
`

export const ResultText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 0.2px;
    color: #21293d;

    margin-top: 20px;
`

export const ListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

export const TextContainer = styled.div`
    display: flex;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.2px;

    margin-left: 10px;
`

export const AnswerWord = styled.span`
    margin-left: 10px;
    font-Size: 20px;
    font-weight: 700;
    color: ${({trueAnswer}) => trueAnswer ? '#41e21a' : '#e95555'};
`