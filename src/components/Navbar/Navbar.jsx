import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

import { Header, NavLinkStyled, Navigation } from "./Navbar.styled";

export const Navbar = () => {

    return (
        <>
            <Header>
                <Link to="/" style={{ cursor: "pointer" }}>
                    <div >
                        <img src={''} alt='логотип' height={30} />
                    </div>
                </Link>
                <Navigation>
                    <NavLinkStyled to="/">Головна сторінка</NavLinkStyled>
                    <NavLinkStyled to="/add-word">Додати слово</NavLinkStyled>
                    <NavLinkStyled to="/word-check">Перевірити знання</NavLinkStyled>
                </Navigation>
            </Header>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}