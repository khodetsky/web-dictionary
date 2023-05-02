import styled from "styled-components";
import { NavLink } from "react-router-dom";

// textColor: #21293d

export const Header = styled.header`
    width: 250px;
    height: calc(100vh - 80px);
    border-radius: 15px;
    border: 5px solid #d5dee2;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #f1f3f4;
`

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    width: 200px;
    height: 40px;
    border-radius: 20px;

    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #21293d;

    :hover, :focus {
        color: #f1f3f4;
        background-color: #21293d;
    };
    &.active {
        color: #f1f3f4;
        background-color: #21293d;
    };
`

export const Navigation = styled.nav`
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    gap: 10px;

`