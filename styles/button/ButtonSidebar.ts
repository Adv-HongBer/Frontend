import styled from "styled-components";

export const ButtonSidebar = styled.button<{ isOpen: boolean }>`
    position: relative;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: all ease 0.5s;
    background-color: transparent;
    padding: 0;
    ${props => props.isOpen && `transform: rotate(90deg)`};

    & svg {
        color: #FFFFFF;
        font-size: 24px;
    }
`