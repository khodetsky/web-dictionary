import { ButtonStyled } from "./TestButton.styled";

import { useEffect } from "react";

export const TestButton = ({ handleBtnClick, children, setButtonsArr }) => {

    useEffect(() => {
        const btnsArr = Array.from(document.querySelectorAll('#answerBtn'));
        setButtonsArr(btnsArr)
    }, [setButtonsArr])

    return (
        <ButtonStyled id='answerBtn' type='button' onClick={handleBtnClick}>{children}</ButtonStyled>
    )
}