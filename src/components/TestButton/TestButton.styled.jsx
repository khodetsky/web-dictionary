import styled from "styled-components";

export const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 40px;
    border-radius: 20px;
    padding: 5px 20px;

    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.2px;
    color: #21293d;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        transform: scale(1.1);
    };

    :disabled {
        color: #9197a5;
        :hover {
            color: #9197a5;
            transform: scale(1);
            box-shadow: none;
        }
    };
    
`