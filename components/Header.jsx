import React, { useState } from "react";
import Image from 'next/image'
import Link from "next/link";
const Header = () => {

    const [isPopupVisible, setPopupVisibility] = useState(false);

    const togglePopup = () => {
        setPopupVisibility(!isPopupVisible);
    };

    return (
        <>
            <div className="bg_gray position-sticky top-0 left-0 index_1">
                <nav className="d-flex align-items-center justify-content-between small_nav w-100">
                    <div className="small_nav_side_line"></div>
                    <div >
                        <Link href="/">
                            <Image src="/assets/image/svg/nav_girl_icon.svg" width={50} height={50} alt="common_icons_size" className="profiles_small_nav" />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center ">
                        <Link className="px-2"
                            href="/community"
                        >
                            <Image src="/assets/image/svg/mdi_people_group.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size p/" />
                        </Link>
                        <Link
                            href="/statuspopup"
                            className="px-2 ms_10">
                            <Image src="/assets/image/svg/Status_Icon.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size" />

                        </Link>
                        <Link
                            href="/channelpopup"
                            className="px-2 ms_10">
                            <Image src="/assets/image/svg/channels_icon.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size" />

                        </Link>

                        <Link
                            href="/newchat"
                            className="px-2 ms_10">
                            <Image src="/assets/image/svg/msg_icon.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size" />

                        </Link>
                        <div className="position-relative click_popup ms_10" onClick={togglePopup}>
                            <Link
                                href="/"
                                className="ps-xl-2 ">
                                <Image src="/assets/image/svg/three_dots_icon.svg" width={24} height={24} alt="common_icons_size" className="common_icons_size" />
                            </Link>
                            <div className={`mt-2 menu_popup_parent ff_inter bg-white mx-auto position-absolute ${isPopupVisible ? 'd-block' : 'd-none'} click_popup_block end-0`}>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4 '>New group</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4 '>New community</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4 '>Starred messages</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4 '>Select chats</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4 '>Settings</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4 '>Log out</Link>
                                </div>
                                <div className='border_line'>

                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4 '>Get WhatsApp for Window</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
