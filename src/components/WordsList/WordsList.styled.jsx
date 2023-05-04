import styled from "styled-components";

export const ListStyled = styled.ul`
    width: 760px;
    height: 260px;
    overflow: scroll;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 12px;
    justify-items: center;
`