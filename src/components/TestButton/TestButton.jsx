import { ButtonStyled } from "./TestButton.styled";

export const TestButton = ({handleBtnClick, children}) => {

    return (
        <ButtonStyled id='answerBtn' type='button' onClick={handleBtnClick}>{children}</ButtonStyled>
    )
}