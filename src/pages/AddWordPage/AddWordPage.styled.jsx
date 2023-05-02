import styled from "styled-components";
import { Form, Field } from 'formik';

export const MainSection = styled.section`
    width: 800px;
    height: calc(100vh - 80px);
    margin-left: 20px;
    border-radius: 15px;
    padding: 20px 30px;
    background-color: #f1f3f4;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.2px;
    color: #21293d;

    margin-bottom: 20px;
`

export const SignInFormStyled = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const InputContainer = styled.div`
    position: relative;
    display: block;
`

export const InputStyled = styled(Field)`
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 1.25;
    letter-spacing: 0.4px;

    box-sizing: border-box;
    width: 300px;
    color: #21293d;
    border: 1px solid #21293d;
    background: none;
    border-radius: 15px;
    margin-top: 50px;
    padding: 15px 20px;
    outline: none;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
      border-color: #8b00ff;
    }
`

export const LabelStyled = styled.label`
    position: absolute;
    left: 16px;
    top: 75%;
    transform: translateY(-50%);

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 1.25;
    letter-spacing: 0.2px;
    color: #21293d;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1); 

    ${InputStyled}:focus + & {
      transform: translateY(-52px);
      color: #8b00ff;
    }   
    ${InputStyled}:not(:placeholder-shown) + & {
      transform: translateY(-52px);
    }
`

export const ErrorMessage = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.25;
    letter-spacing: 0.2px;
    color: red; 
    position: absolute;
    margin-top: 7px;
`

export const SignInBtn = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 18px;
    margin-top: 70px;
    width: 300px;
    height: 44px;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    letter-spacing: 0.2px;
    color: #f1f3f4;
    letter-spacing: 1px;
    background-color: #8b00ff;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    :hover, :focus {
        color: #21293d;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    };
`