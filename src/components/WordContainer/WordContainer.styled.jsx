import styled from "styled-components";

export const ListItem = styled.li`
    display: flex;
    align-items: center;
`

export const DataContainer = styled.div`
    height: 30px;
    width: 220px;
    border-radius: 15px;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.2px;

    color: #f1f3f4;
    background-color: #21293d;

    display: flex;
    align-items: center;
    padding: 0 20px;
`

export const IconContainer = styled.svg`
    width: 12px;
    height: 12px;
    margin-left: 7px;
`

export const Icon = styled('use')`
    stroke: none;
    fill: #f1f3f4;
    width: 30px;
    height: 30px;
`