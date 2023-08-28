import Link from 'next/link'
import React from 'react'

function MenuPopup() {
    return (
        <>
            <div className="menu_popup_parent ff_inter bg-white mx-auto my-5">
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Contact info</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Business details</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Select messages</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Close chat</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Mute notifications</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Clear massages</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Delete chat</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Report</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Block</Link>
                </div>
            </div>
        </>
    )
}

export default MenuPopup