import React from 'react'
import Lock from "../../../public/assets/svg/gray_lock_icon.svg";
import Logo from "../../../public/assets/svg/gray_splash_whatsapp_logo.svg";
import Image from 'next/image';
import Link from 'next/link'


function SpleshScreenPopup() {
    return (
        <div className='ff_inter '>
            <div className="row mx-0 text-center d-flex align-items-center vh-100 justify-content-center">
                <div className="col-11  col-md-8 m-auto ">
                    <Link href="/" className='text-decoration-none mb-2 d-block' >
                        <Image src={Logo}
                            width={125}
                            height={125}
                            alt="logo"
                            className='mb-4 mb-md-5 gray_splash_whatsapp_logo' />
                    </Link>
                    <span className='border-top w-100 d-block max_w_888 m-auto'></span>
                    <h1 className='fw_medium color_lite_black fs_llg mb-md-3 pt-3 pt-md-4' >
                        WhatsApp
                    </h1>
                    <p className='mb-0 justify-content-center color_gray fw-normal fs_ragular mb-0 d-flex align-items-center'>
                        <Image src={Lock}
                            width={13}
                            height={13}
                            alt="lock" />
                        <span className='opacity-50 ps-1' >  End-to-end encrypted</span>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default SpleshScreenPopup