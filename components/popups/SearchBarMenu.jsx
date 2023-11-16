import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

function SearchBarMenu() {
    return (
        <>
            <div className="menu_popup_parent border_radius_10_popup ff_inter bg-white mx-auto my-5">
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/photo_icon.svg" alt="Pencil" /> Photos & Videos</Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/pink_camera_icon.svg" alt="Camera" /> Camera </Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/blue_contacts_icon.svg" alt="Contact" /> Contact </Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/document_icon.svg" alt="Document" /> Document </Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/poll_icon.svg" alt="poll" /> Poll  </Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25 ps-4'> <Image className='me-2' height={24} width={24} src="/assets/image/svg/new_sticker_icon.svg" alt="Sticker" /> New Sticker </Link>
                </div>
            </div>
        </>
    )
}

export default SearchBarMenu