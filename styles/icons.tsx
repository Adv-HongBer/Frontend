import Image from "next/image";

export function SidebarIcon() {
    return (
        <Image
            src="/assets/button_sidebar.webp"
            alt="사이드바"
            width={24}
            height={24}
            quality={100}
            priority />
    )
}

export function LogoutIcon() {
    return (
        <Image
            src="/assets/logout.webp"
            alt="로그아웃"
            width={20}
            height={20}
            quality={100}
            priority />
    )
}

export function MyPageIcon() {
    return (
        <Image
            src="/assets/mypage.webp"
            alt="마이페이지"
            width={20}
            height={20}
            quality={100}
            priority />
    )
}

export function Scrap() {
    return (
        <Image
            src="/assets/scrap.webp"
            alt="스크랩"
            width={20}
            height={20}
            quality={100}
            priority />
    )
}