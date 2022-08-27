import styled, { keyframes } from "styled-components";
import { Black } from "../colors";

const sidebarOpenMobile = keyframes`
    from {
        width: 0;
    }

    to {
        width: 250px;
    }
`

const sidebarOpenDesktop = keyframes`
    from {
        width: 0;
    }

    to {
        width: 300px;
    }
`

export const ContainerSidebar = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    bottom: 0;
    height: 100%;
    min-height: calc(100vh - 48px);
    background-color: ${Black}
    animation: ${sidebarOpenMobile} 0.2s linear forwards;

    @media screen and (min-width: 768px) {
        top: 64px;
        min-height: calc(100vh - 64px);
        animation: ${sidebarOpenDesktop} 0.2s linear forwards;
    }
`