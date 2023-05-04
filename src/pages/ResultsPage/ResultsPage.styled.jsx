import styled from "styled-components";

export const MainSection = styled.section`
    width: 800px;
    height: calc(100vh - 80px);
    margin-left: 20px;
    border-radius: 15px;
    padding: 20px 30px;
    background-color: #f1f3f4;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h1`
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