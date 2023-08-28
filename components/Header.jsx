import React from "react";
import Image from 'next/image'
import Link from "next/link";
const Header = () => {


    return (
        <>
            <div className="bg_gray position-sticky top-0 left-0 index_1">
                <nav className="d-flex align-items-center justify-content-between small_nav">
                    <div >
                        <Link href="/">
                            <Image src="/assets/image/svg/nav_girl_icon.svg" width={50} height={50} alt="/" className="profiles" />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center gap-3 gap-xl-4">
                        <Link
                            href="/"
                            target="_blank"
                        >
                            <Image src="/assets/image/svg/mdi_people_group.svg" width={24} height={24} alt="/" className="common_icons_size" />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="px-2">
                            <Image src="/assets/image/svg/Status_Icon.svg" width={24} height={24} alt="/" className="common_icons_size" />

                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                        >
                            <Image src="/assets/image/svg/msg_icon.svg" width={24} height={24} alt="/" className="common_icons_size" />

                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="ps-xl-2">
                            <Image src="/assets/image/svg/three_dots_icon.svg" width={24} height={24} alt="/" className="common_icons_size" />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
