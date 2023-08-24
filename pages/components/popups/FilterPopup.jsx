import React from 'react'
import Link from 'next/link'


function FilterPopup() {
    return (
        <div className='d-flex vh-100 justify-content-center align-items-center ff_inter text-center'>
            <div className="">
                <p className='mb-0 color_gray opacity-50 fw-normal fs_ragular mb-2 '>No unread chats</p>
                <Link href="/" className='text-decoration-none fw-normal color_lite_green fs_mmd' >
                    Clear filter
                </Link>
            </div>
        </div>
    )
}

export default FilterPopup