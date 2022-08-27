import styled from "styled-components";
import { Black, White } from "../colors";
import { MalgunGothic, Medium } from "../Fonts";

export const ButtonLogin = styled.button`
    width: 140px;
    height: 32px;
    ${MalgunGothic}
    ${Medium}
    background-color: transparent;
    color: ${Black}
    font-size: 14px;
    margin-right: 16px;
    cursor: pointer;
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        background-color: ${White}
        border-radius: 25px;
    }
`