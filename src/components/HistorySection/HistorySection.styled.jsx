import styled from "styled-components";

export const HistoryContainer = styled.div`
    width: 500px;
    height: calc((100vh - 100px) / 3);
    border-radius: 15px;
    background-color: #f1f3f4;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    padding: 10px 20px;
`

export const SectionTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.2px;
    color: #21293d;

    margin-bottom: 10px;
`

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #21293d;
`

export const TextContainer = styled.div`
    width: 460px;
    height: calc((100vh - 320px) / 3);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`