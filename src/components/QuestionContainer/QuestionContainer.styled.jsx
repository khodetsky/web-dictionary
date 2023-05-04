import styled from "styled-components";

export const Container = styled.div`
    width: 800px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainWord = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.2px;
    color: #21293d;

    margin-bottom: 60px;
    margin-top: 40px;
`

export const ButtonsList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;

    // margin-top: 30px;
`