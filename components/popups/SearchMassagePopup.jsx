import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function SearchMassagePopup() {
    return (
        <>
            <div id='grand_massage_popup' className='ff_inter'>
                <div className="search_massage_popup_parent bg_gray d-flex align-items-center gap-3">
                    <Link href="#" className="text-decoration-none">
                        <Image src="/assets/image/svg/gray_cross_icon.svg"
                            height={26}
                            width={26}
                            alt="cross" />
                    </Link>
                    <p className='mb-0 ps-1 fs_ragular opacity_70 fw-normal lh_25 color_dark_black '>Search Messages</p>
                </div>
                <div className="search_input_popup position-relative">
                    <input type="text" className='bg_gray border-0 w-100 border_radius_10 ' />
                    <Link href="/" className="text-decoration-none position-absolute left_green_errow">
                        <Image src="/assets/image/svg/left_gray_errow.svg" height={30} width={30} alt="Errow" className='green_left_popup_errow' />
                    </Link>
                </div>
                <p className='fs_ragular opacity-50 fw-normal text-center mt-5 pt-1 lh_25 color_dark_black'>Search for messages with Daniel kalip</p>
            </div>
        </>
    )
}

export default SearchMassagePopup