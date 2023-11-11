import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

function DesktopHeader() {
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const togglePopup = () => {
        setPopupVisibility(!isPopupVisible);
    };
    return (
        <>
            <div className="bg_gray position-sticky z-3 top-0">
                <nav className="d-flex align-items-center justify-content-between big_nav w-100">
                    <div className="d-flex align-items-center gap-3">
                        <Link href="/">
                            <Image src="/assets/image/svg/nav_boy_icon.svg" width={50} height={50} alt="/" className='profiles_small_nav' />
                        </Link>
                        <h1 className='font_16 color_gray fw_medium mb-0 gap-2'>Daniel Kalio</h1>
                    </div>
                    <div className="d-flex gap-3 gap-xl-4">
                        {/* <Link
                            href="/"
                            className="">
                            <Image src="/assets/image/svg/call_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />
                        </Link> */}
                        <Link
                            href="/"
                            className="px-2 carbon_video">
                            <Image src="/assets/image/svg/carbon_video.svg" width={24} height={24} alt="/" className='common_icons_size me_6px' />
                            <Image src="/assets/image/svg/arrow_down.svg" width={13} height={10} alt="/" className='common_icons_size' />
                        </Link>
                        <Link
                            href="/"
                            className="">
                            <Image src="/assets/image/svg/search_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />

                        </Link>
                        <div className='position-relative click_popup' onClick={togglePopup}>
                            <Link
                                href="/"
                                className=" p p-2" >
                                <Image src="/assets/image/svg/three_dots_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />

                            </Link>
                            <div className={`mt-2 menu_popup_parent ff_inter bg-white mx-auto position-absolute ${isPopupVisible ? 'd-block' : 'd-none'}  end-0`}>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Contact info</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Business details</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Select messages</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Close chat</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Mute notifications</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Clear massages</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Delete chat</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Report</Link>
                                </div>
                                <div className="my-xl-1 menu_links">
                                    <Link href="/" className='text-decoration-none color_dark_black fw-normal font-base  lh_25 ps-4'>Block</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default DesktopHeader