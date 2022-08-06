import { HeaderLogoSample } from "../HeaderLogoSample";
import { ButtonLogin } from "../styles/button/ButtonLogin";
import { ButtonSidebar } from "../styles/button/ButtonSidebar";
import { ContainerHeader } from "../styles/container/ContainerHeader";
import { WrapHeader } from "../styles/wrap/WrapHeader";

export default function Header() {
    return (
        <ContainerHeader>
            <WrapHeader>
                <HeaderLogoSample>HONGBER</HeaderLogoSample>
                <div style={{ display: "flex" }}>
                    <ButtonLogin>로그인 | 회원가입</ButtonLogin>
                    <ButtonSidebar />
                </div>
            </WrapHeader>
        </ContainerHeader>
    )
}