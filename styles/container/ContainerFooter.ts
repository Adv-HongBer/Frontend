import styled from "styled-components";
import { Black } from "../colors";

export const ContainerFooter = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 48px;
    background-color: ${Black}

    @media screen and (min-width: 768px) {
        height: 64px;
    }
`