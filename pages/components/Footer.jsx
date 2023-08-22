import React from 'react'
import Image from 'next/image'
import Search_Icon from "../../public/assets/svg/emoji_icon.svg";
import Pin from "../../public/assets/svg/pin_icon.svg";
import Camera from "../../public/assets/svg/cemera_icon.svg";
import Mick from "../../public/assets/svg/mick_icon.svg";
import Link from 'next/link';


function Footer() {
    return (
        <>
            <div className="footer_space d-flex align-items-center bg_gray pb_20 pt_20" id='footer'>
                <div className='d-flex align-items-center gap-3 gap-lg-4 me-3 me-lg-4 pe-1'>
                    <Link href="/" >
                        <Image src={Search_Icon} alt="NavLogo" />
                    </Link>
                    <Link href="/" className='ms-lg-2 ps-lg-1' >
                        <Image src={Pin} alt="NavLogo" />
                    </Link>
                </div>
                <div className="position-relative w-100">
                    <input type="text" placeholder='Type a message' className='border-0 bg_gray w-100' />
                    <Image src={Camera} alt="NavLogo" className="position-absolute searc_icon_one" />
                </div>
                <Link href="/" className='ms-3 ms-lg-4 ps-lg-1' >
                    <Image src={Mick} alt="NavLogo" />
                </Link>
            </div>
        </>
    )
}

export default Footer