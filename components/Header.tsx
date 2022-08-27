import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { HeaderLogoSample } from "../HeaderLogoSample";
import { ButtonLogin } from "../styles/button/ButtonLogin";
import { ButtonSidebar } from "../styles/button/ButtonSidebar";
import { ContainerHeader } from "../styles/container/ContainerHeader";
import { ContainerSidebar } from "../styles/container/ContainerSidebar";
import { WrapHeader } from "../styles/wrap/WrapHeader";

export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const dropDown = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <ContainerHeader>
            <WrapHeader>
                <HeaderLogoSample>HONGBER</HeaderLogoSample>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <ButtonLogin>로그인 | 회원가입</ButtonLogin>
                    <ButtonSidebar isOpen={sidebarOpen} onClick={dropDown}>
                        <MenuOutlined style={{ display: "block" }} width="100%" height="100%" />
                    </ButtonSidebar>
                </div>
                {/* {sidebarOpen &&
                    <div></div>
                } */}
            </WrapHeader>
            {sidebarOpen &&
                <ContainerSidebar />
            }
        </ContainerHeader>
    )
}