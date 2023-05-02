import styled from "styled-components";
import { NavLink } from "react-router-dom";

// textColor: #21293d

export const Header = styled.header`
    width: 250px;
    height: calc(100vh - 80px);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #f1f3f4;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
    letter-spacing: 0.2px;
    color: #21293d;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
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