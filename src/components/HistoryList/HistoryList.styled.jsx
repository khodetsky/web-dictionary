import styled from "styled-components";

export const ListStyled = styled.ul`
    width: 460px;
    height: calc((100vh - 320px) / 3);
    overflow: scroll;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
`