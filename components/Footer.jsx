import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


function Footer() {
    return (
        <>
            <div className="footer_space d-flex align-items-center bg_gray pb_20 pt_20" id='footer'>
                <div className='d-flex align-items-center justify-content-center ps-sm-2 pe-2 '>
                    <Link href="/" className='' >
                        <Image src="/assets/image//svg/smile_emoji_icon.svg" width={24} height={24} alt="/" className="d-none d-sm-block searc_icon_one common_icons_size" />
                    </Link>
                    <Link href="/" className='p-sm-2 p-md-3 mx-auto' >
                        <Image src="/assets/image/svg/Search_bar_menu.svg" width={24} height={24} alt="/" className='common_icons_size ' />
                    </Link>
                </div>
                <div className="position-relative w-100">
                    <input type="text" placeholder='Type a message'  className='border-0 bg_gray w-100 ' />
                    {/* <Image src="/assets/image//svg/smile_emoji_icon.svg" width={24} height={24} alt="/" className="position-absolute searc_icon_one common_icons_size" /> */}
                </div>
                <Link href="/" className='ms-2 ms-sm-3 ms-xl-4 ps-xl-1' >
                    <Image src="/assets/image/svg/mick_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />
                </Link>
            </div>
        </>
    )
}

export default Footer