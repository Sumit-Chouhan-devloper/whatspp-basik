import React from "react";
import Image from 'next/image'
import NavLogo from "../../public/assets/image/svg/nav_girl_icon.svg";
import ThreeDots from "../../public/assets/image/svg/three_dots_icon.svg";
import Msg_Icon from "../../public/assets/image/svg/msg_icon.svg";
import Status_Icon from "../../public/assets/image/svg/Status_Icon.svg";
import Mdi_People_Group from "../../public/assets/image/svg/mdi_people_group.svg";
import Link from "next/link";
const Header = () => {


    return (
        <>
            <div className="bg_gray position-sticky top-0 left-0 index_1">
                <nav className="d-flex align-items-center justify-content-between small_nav">
                    <div >
                        <Link href="/">
                            <Image src={NavLogo} alt="/" className="profiles" />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-xl-4">
                        <Link
                            href="/"
                            target="_blank"
                        >
                            <Image src={Mdi_People_Group} alt="/" className="common_icons_size" />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="px-2">
                            <Image src={Status_Icon} alt="/" className="common_icons_size" />

                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                        >
                            <Image src={Msg_Icon} alt="/" className="common_icons_size" />

                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="ps-xl-2">
                            <Image src={ThreeDots} alt="/" className="common_icons_size" />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
