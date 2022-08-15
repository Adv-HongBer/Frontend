import { useState } from "react";
import { HeaderLogoSample } from "../HeaderLogoSample";
import { ButtonLogin } from "../styles/button/ButtonLogin";
import { ButtonSidebar } from "../styles/button/ButtonSidebar";
import { ContainerHeader } from "../styles/container/ContainerHeader";
import { SidebarIcon } from "../styles/icons";
import { WrapHeader } from "../styles/wrap/WrapHeader";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const dropDown = () => {
        setSidebarOpen(true);
    }

    return (
        <ContainerHeader>
            <WrapHeader>
                <HeaderLogoSample>HONGBER</HeaderLogoSample>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <ButtonLogin>로그인 | 회원가입</ButtonLogin>
                    <ButtonSidebar onClick={dropDown}>
                        <SidebarIcon />
                    </ButtonSidebar>
                </div>
                {sidebarOpen &&
                    <div></div>
                }
            </WrapHeader>
        </ContainerHeader>
    )
}