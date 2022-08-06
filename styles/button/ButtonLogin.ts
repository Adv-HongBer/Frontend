import styled from "styled-components";
import { Black, White } from "../colors";
import { MalgunGothic, Medium } from "../Fonts";

export const ButtonLogin = styled.button`
    width: 140px;
    height: 32px;
    ${MalgunGothic}
    ${Medium}
    background-color: ${White}
    color: ${Black}
    font-size: 14px;
    border-radius: 25px;
    margin-right: 16px;
`