import styled from "styled-components";

export const Button = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 18px;
    margin-top: 70px;
    width: 300px;
    height: 50px;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #f1f3f4;
    letter-spacing: 1px;
    background-color: #21293d;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    :hover, :focus {
        background-color: #151a25;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    };
`