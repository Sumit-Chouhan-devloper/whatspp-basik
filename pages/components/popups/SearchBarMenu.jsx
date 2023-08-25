import Link from 'next/link'
import Photos from "../../../public/assets/image/svg/photo_icon.svg";
import Camera from "../../../public/assets/image/svg/pink_camera_icon.svg";
import Contact from "../../../public/assets/image/svg/blue_contacts_icon.svg";
import Document from "../../../public/assets/image/svg/document_icon.svg";
import Poll from "../../../public/assets/image/svg/poll_icon.svg";
import Sticker from "../../../public/assets/image/svg/new_sticker_icon.svg";
import React from 'react'
import Image from 'next/image';

function SearchBarMenu() {
    return (
        <>
            <div className="menu_popup_parent ff_inter bg-white mx-auto my-5">
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25'> <Image className='me-2' src={Photos} alt="Pencil" /> Photos & Videos</Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25'> <Image className='me-2' src={Camera} alt="Camera" /> Camera </Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25'> <Image className='me-2' src={Contact} alt="Contact" /> Contact </Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25'> <Image className='me-2' src={Document} alt="Document" /> Document </Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25'> <Image className='me-2' src={Poll} alt="poll" /> Poll  </Link>
                </div>
                <div className="my-2 menu_links d-flex align-items-center">
                    <Link href="/" className='text-decoration-none color_dark_black fw_medium fs_ragular lh_25'> <Image className='me-2' src={Sticker} alt="Sticker" /> New Sticker </Link>
                </div>
            </div>
        </>
    )
}

export default SearchBarMenu