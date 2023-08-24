import Link from 'next/link'
import React from 'react'

function MenuTwoPopup() {
    return (
        <>
            <div className="menu_popup_parent ff_inter bg-white mx-auto my-5">
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>New group</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>New community</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Starred messages</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Select chats</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Settings</Link>
                </div>
                <div className="my-2 menu_links">
                    <Link href="/" className='text-decoration-none color_dark_black fw-normal fs_ragular lh_25'>Log out</Link>
                </div>
            </div>
        </>
    )
}

export default MenuTwoPopup