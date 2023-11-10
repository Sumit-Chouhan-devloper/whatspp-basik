import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';


function Footer() {
    const [isPopupVisible, setPopupVisibility] = useState(false);

    const togglePopup = () => {
        setPopupVisibility(!isPopupVisible);
    };

    return (
        <>
            <div className="footer_space d-flex align-items-center bg_gray pb_20 pt_20" id='footer'>
                <div className='d-flex align-items-center justify-content-center ps-sm-2 pe-2 '>
                    <Link href="/" className='' >
                        <Image src="/assets/image//svg/smile_emoji_icon.svg" width={24} height={24} alt="/" className="d-none d-sm-block searc_icon_one common_icons_size" />
                    </Link>
                    <div className='position-relative click_popup' onClick={togglePopup}>
                        <Link href="/" className='m-sm-2 m-md-3 mx-auto ' onClick={togglePopup} >
                            <Image src="/assets/image/svg/Search_bar_menu.svg" width={24} height={24} alt="/" className='common_icons_size ' />
                        </Link>
                        <div className={`mb-5 menu_popup_parent border_radius_10_popup ff_inter bg-white mx-auto position-absolute ${isPopupVisible ? 'd-block' : 'd-none'} click_popup_block start-0  bottom-0`}>
                            <div className="my-xl-1 menu_links d-flex align-items-center">
                                <Link href="/" className='text-decoration-none color_dark_black fw_medium font-base  lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/document_icon.svg" alt="Document" /> Document </Link>
                            </div>
                            <div className="my-xl-1 menu_links d-flex align-items-center">
                                <Link href="/" className='text-decoration-none color_dark_black fw_medium font-base  lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/photo_icon.svg" alt="Pencil" /> Photos & Videos</Link>
                            </div>
                            <div className="my-xl-1 menu_links d-flex align-items-center">
                                <Link href="/" className='text-decoration-none color_dark_black fw_medium font-base  lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/pink_camera_icon.svg" alt="Camera" /> Camera </Link>
                            </div>
                            <div className="my-xl-1 menu_links d-flex align-items-center">
                                <Link href="/" className='text-decoration-none color_dark_black fw_medium font-base  lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/blue_contacts_icon.svg" alt="Contact" /> Contact </Link>
                            </div>
                            <div className="my-xl-1 menu_links d-flex align-items-center">
                                <Link href="/" className='text-decoration-none color_dark_black fw_medium font-base  lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/poll_icon.svg" alt="poll" /> Poll  </Link>
                            </div>
                            <div className="my-xl-1 menu_links d-flex align-items-center">
                                <Link href="/" className='text-decoration-none color_dark_black fw_medium font-base  lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/new_sticker_icon.svg" alt="Sticker" /> New Sticker </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-relative w-100">
                    <input type="text" placeholder='Type a message' className='border-0 bg_gray w-100 ' />
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