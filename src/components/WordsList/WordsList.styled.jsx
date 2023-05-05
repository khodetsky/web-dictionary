import styled from "styled-components";

export const ListStyled = styled.ul`
    width: 740px;
    height: calc((100vh - 250px) / 3 * 2);
    overflow: scroll;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 12px;
    justify-items: center;
    align-content: flex-start;
`