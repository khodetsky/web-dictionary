import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

import { Header, NavLinkStyled, Navigation, IconContainer, Icon } from "./Navbar.styled";
import svgSprite from "../../images/sprite.svg";
import logoImg from "../../images/logo.webp"

export const Navbar = () => {

    return (
        <>
            <Header>
                <Link to="/" style={{ cursor: "pointer" }}>
                    <div >
                        <img src={logoImg} alt='логотип' height={100} />
                    </div>
                </Link>
                <Navigation>
                    <NavLinkStyled to="/">
                        <IconContainer >
                            <Icon href={svgSprite + '#list'}></Icon>
                        </IconContainer>
                        Головна сторінка
                    </NavLinkStyled>
                    <NavLinkStyled to="/add-word">
                        <IconContainer >
                            <Icon href={svgSprite + '#add'}></Icon>
                        </IconContainer>
                        Додати слово
                    </NavLinkStyled>
                    <NavLinkStyled to="/word-check">
                        <IconContainer >
                            <Icon href={svgSprite + '#checked'}></Icon>
                        </IconContainer>
                        Перевірити знання
                    </NavLinkStyled>
                </Navigation>
            </Header>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}