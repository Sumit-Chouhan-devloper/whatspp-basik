import React from "react";
import Image from 'next/image'
import NavLogo from "../../public/assets/svg/nav_girl_icon.svg";
import ThreeDots from "../../public/assets/svg/three_dots_icon.svg";
import Msg_Icon from "../../public/assets/svg/msg_icon.svg";
import Status_Icon from "../../public/assets/svg/Status_Icon.svg";
import Mdi_People_Group from "../../public/assets/svg/mdi_people_group.svg";
import Link from "next/link";
const Header = () => {


    return (
        <>
            <div className="bg_gray">
                <nav className="d-flex align-items-center justify-content-between small_nav">
                    <div className="">
                        <Link href="/">
                            <Image src={NavLogo} alt="NavLogo" />
                        </Link>
                    </div>
                    <div className="d-flex gap-4">
                        <a
                            href="/"
                            target="_blank"
                            className="">
                            <Image src={Mdi_People_Group} alt="NavLogo" />
                        </a>
                        <a
                            href="/"
                            target="_blank"
                            className="px-2">
                            <Image src={Status_Icon} alt="NavLogo" />

                        </a>
                        <a
                            href="/"
                            target="_blank"
                            className="">
                            <Image src={Msg_Icon} alt="NavLogo" />

                        </a>
                        <a
                            href="/"
                            target="_blank"
                            className="ps-2">
                            <Image src={ThreeDots} alt="NavLogo" />
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
