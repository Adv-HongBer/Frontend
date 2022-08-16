import styled from "styled-components";

export const SectionHomePage = styled.section`
    width: 100%;
    height: calc(100vh - 48px);
    background-color: rgb(200, 200, 200);
    padding-bottom: 48px;

    @media screen and (min-width: 768px) {
        height: calc(100vh - 64px);
        padding-bottom: 64px;
    }
`