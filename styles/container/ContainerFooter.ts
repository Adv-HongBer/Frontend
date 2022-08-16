import styled from "styled-components";
import { Black } from "../colors";

export const ContainerFooter = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 48px;
    background-color: ${Black}

    @media screen and (min-width: 768px) {
        height: 64px;
    }
`