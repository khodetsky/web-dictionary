import styled from "styled-components";

export const ListItem = styled.li`
    height: 26px;
    width: 300px;
    border-radius: 13px;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.2px;

    color: #f1f3f4;
    background-color: #21293d;

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;

    :hover, :focus {
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
`