import React from 'react'
import Image from 'next/image'
import NavLogo from "../../public/assets/svg/nav_boy_icon.svg";
import ThreeDots from "../../public/assets/svg/three_dots_icon.svg";
import Search_Icon from "../../public/assets/svg/search_icon.svg";
import Carbon_Video from "../../public/assets/svg/carbon_video.svg";
import Call_Icon from "../../public/assets/svg/call_icon.svg";
import Link from 'next/link';

function DesktopHeader() {
    return (
        <>
            <div className="bg_gray position-sticky top-0">
                <nav className="d-flex align-items-center justify-content-between big_nav w-100">
                    <div className="">
                        <Link href="/">
                            <Image src={NavLogo} alt="NavLogo" />
                        </Link>
                    </div>
                    <div className="d-flex gap-4">
                        <Link
                            href="/"
                            target="_blank"
                            className="">
                            <Image src={Call_Icon} alt="NavLogo" />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="px-2">
                            <Image src={Carbon_Video} alt="NavLogo" />

                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="">
                            <Image src={Search_Icon} alt="NavLogo" />

                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="ps-2">
                            <Image src={ThreeDots} alt="NavLogo" />
                        </Link>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default DesktopHeader