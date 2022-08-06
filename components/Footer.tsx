import { ContainerFooter } from "../styles/container/ContainerFooter";
import { TextFooter } from "../styles/text/TextFooter";
import { WrapFooter } from "../styles/wrap/WrapFooter";

export default function Footer() {
    return (
        <ContainerFooter>
            <WrapFooter>
                <TextFooter>&copy;Copyright {new Date().getFullYear()}</TextFooter>
            </WrapFooter>
        </ContainerFooter>
    )
}