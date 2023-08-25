import React from 'react'
import Image from 'next/image';
import Cross from "../../../public/assets/image/svg/gray_cross_icon.svg";
import Righticon from "../../../public/assets/image/svg/accordian_icon_right.svg";
import Daniel from "../../../public/assets/image/png/DanielKalio.png";
import Link from 'next/link';


function ContactDetail() {
    return (
        <>
            <div id='grand_massage_popup' className='ff_inter bg_gray'>
                <div className="search_massage_popup_parent bg_gray">
                    <Link href="/" className="text-decoration-none d-flex align-items-center gap-3">
                        <Image src={Cross}
                            height={26}
                            width={26}
                            alt="cross" />
                        <p className='mb-0 ps-1 fs_ragular opacity_70 fw-normal lh_25 color_dark_black '>Contact info</p>
                    </Link>
                </div>

                <div className="contact_parent bg-white text-center py-5">
                    <div className="py-md-5 mb-lg-2 mt-lg-4">
                        <Image src={Daniel} alt="Daniel" height={368} width={368} className='daniel' />
                    </div>
                    <h4 className='fw_semibold text_dark_black fs_mmd mt-5 mt-md-0 pt-lg-4 pt-lg-1 mb-2'>Daniel Kalio</h4>
                    <Link href="/" className="text-decoration-none opacity-50 fw-normal color_dark_black fs_ragular mb-lg-2 d-block pb-lg-1">
                        +91 74849 75499
                    </Link>
                </div>
                <div className="bg-white contactpopup_space text-center text-lg-start">
                    <Link href="/" className="text-decoration-none fs_mmd opacity-50 fw-normal color_dark_black fs_ragular mb-md-2 d-block pb-1">
                        About
                    </Link>
                    <p className='fw-fw-normal color_dark_black fs_mmd mb-0 mb-md-1 mb-md-3 pb-md-1'>Hello</p>
                </div>
                <div className="bg-white contactpopup_space d-flex justify-content-between align-items-center">
                    <p className='fw-fw-normal color_dark_black opacity-50 fs_mmd mb-0 my-md-4 py-2'>Media, link and docs</p>
                    <Link href="/" className="text-decoration-none fs_mmd opacity-50 fw-normal color_dark_black fs_ragular mb-2 d-block pb-1">
                        <span className='pe-3 me-1'>0</span>
                        <Image src={Righticon} alt="Righticon" />
                    </Link>
                </div>
                <span className='d-block border-top'></span>
            </div>
        </>
    )
}

export default ContactDetail