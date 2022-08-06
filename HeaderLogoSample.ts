import styled from "styled-components";
import { White } from "./styles/colors";
import { Light, Serif } from "./styles/Fonts";

export const HeaderLogoSample = styled.h1`
    ${Serif}
    ${Light}
    color: ${White}
    font-size: 32px;

    @media screen and (min-width: 768px) {
        font-size: 36px;
    }
`