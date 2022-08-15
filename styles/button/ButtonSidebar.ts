import styled from "styled-components";
import { White } from "../colors";

export const ButtonSidebar = styled.button`
    position: relative;
    width: 24px;
    height: 24px;
    color: ${White};
    cursor: pointer;
    transition: all ease 0.5s;
    background-color: transparent;
    padding: 0;

    &:hover {
        transform: rotate(90deg);
    }
`