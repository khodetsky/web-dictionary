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