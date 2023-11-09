import React from "react";
import Image from 'next/image'
import Link from "next/link";
const Header = () => {


    return (
        <>
            <div className="bg_gray position-sticky top-0 left-0 index_1">
                <nav className="d-flex align-items-center justify-content-between small_nav w-100">
                    <div >
                        <Link href="/">
                            <Image src="/assets/image/svg/nav_girl_icon.svg" width={50} height={50} alt="common_icons_size" className="profiles" />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center ">
                        <Link className="px-2"
                            href="https://dummy-chat-app.vercel.app/community"
                        >
                            <Image src="/assets/image/svg/mdi_people_group.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size p/" />
                        </Link>
                        <Link
                            href="/"
                            className="px-2 mx-2">
                            <Image src="/assets/image/svg/Status_Icon.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size" />

                        </Link>
                        <Link
                            href="/"
                            className="px-2">
                            <Image src="/assets/image/svg/channels_icon.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size" />

                        </Link>
                        
                        <Link
                            href="https://dummy-chat-app.vercel.app/newchat"
                            className="px-2 mx-2">
                            <Image src="/assets/image/svg/msg_icon.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size" />

                        </Link>
                        <Link
                            href="https://dummy-chat-app.vercel.app/menus"
                            className="ps-xl-2">
                            <Image src="/assets/image/svg/three_dots_icon.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size" />
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
