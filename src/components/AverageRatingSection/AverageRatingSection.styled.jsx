import styled from "styled-components";

export const HistoryContainer = styled.div`
    width: 280px;
    height: calc((100vh - 100px) / 3);
    border-radius: 15px;
    background-color: #21293d;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    overflow: hidden;

    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.2px;
    color: #f1f3f4;

    margin-bottom: 5px;
    position: relative;
    z-index: 3;
`

export const Text = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-align: center;
    color: #f1f3f4;

    margin-top: 10px;
`

export const DataBox = styled.div`
    display: flex;
    height: calc((100vh - 320px) / 3);
    align-items: center;
`