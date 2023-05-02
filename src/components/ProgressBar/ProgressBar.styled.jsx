import styled, {css} from "styled-components";

export const Progressbar = styled.div`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    position: relative;
    background-color: #8b00ff;
    // overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    &::before {
        content: '';
        position: absolute;
        z-index: 5;
        display: block;
        border-radius: 50%;
        background-color: #21293d;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
    }
`

export const Text = styled.p`
    // width: 80px;
    position: absolute;
    z-index: 6;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.2px;
    color: #f1f3f4;
`

export const LeftTopPart = styled.div`
    ${({ rating }) => {
        if (rating === 100) {
                return css`
                      opacity: 0;
                    `
        } else if (rating > 75 && rating < 100) {
            return css`
                      transform: rotate(${((rating * 360) / 100) - 270}deg);
                    `
        } 
    }}

    width: 55px;
    height: 55px;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    transform-origin: bottom right;
    background-color: #21293d;
`

export const LeftBottomPart = styled.div`
    ${({ rating }) => {
        if (rating >= 75) {
                return css`
                      opacity: 0;
                    `
        } else if (rating > 50 && rating < 75) {
            return css`
                      transform: rotate(${((rating * 360) / 100) - 180}deg);
                    `
        } 
    }}

    width: 55px;
    height: 55px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: top right;
    background-color: #21293d;
`

export const RightTopPart = styled.div`
    ${({ rating }) => {
        if (rating >= 25) {
                return css`
                      opacity: 0;
                    `
        } else {
            return css`
                      transform: rotate(${(rating * 360) / 100}deg);
                    `
        } 
    }}
    width: 55px;
    height: 55px;
    position: absolute;
    z-index: 3;
    right: 0;
    top: 0;
    transform-origin: bottom left;
    background-color: #21293d; 
`

export const RightBottomPart = styled.div`
    ${({ rating }) => {
        if (rating >= 50) {
                return css`
                      opacity: 0;
                    `
        } else if (rating > 25 && rating < 50) {
            return css`
                      transform: rotate(${((rating * 360) / 100) - 90}deg);
                    `
        } 
    }}

    width: 55px;
    height: 55px;
    position: absolute;
    right: 0;
    bottom: 0;
    transform-origin: top left;
    background-color: #21293d;
`

export const Fragment = styled.p`
    ${({ rating }) => {
        if (rating > 75 && rating <= 100) {
            return css`
                      opacity: 1;
                    `
        } else {
            return css`
                      opacity: 0;
                    `
        }
    }}

    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;

    width: 0;
    height: 0;
    border-radius: 50%;
    border-style: solid;
    border-width: 55px;
    border-top-color: #8b00ff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;
    transform: rotate(45deg);
`