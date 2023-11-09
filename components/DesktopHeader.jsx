import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function DesktopHeader() {
    return (
        <>
            <div className="bg_gray position-sticky top-0">
                <nav className="d-flex align-items-center justify-content-between big_nav w-100">
                    <div className="d-flex align-items-center gap-2">
                        <Link href="/">
                            <Image src="/assets/image/svg/nav_boy_icon.svg" width={50} height={50} alt="/" className='profiles' />
                        </Link>
                        <h1 className='font-md color_gray fw_medium mb-0 gap-2'>Daniel Kalio</h1>
                    </div>
                    <div className="d-flex gap-3 gap-xl-4">
                        {/* <Link
                            href="/"
                            className="">
                            <Image src="/assets/image/svg/call_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />
                        </Link> */}
                        <Link
                            href="/"
                            className="px-2">
                            <Image src="/assets/image/svg/carbon_video.svg" width={24} height={24} alt="/" className='common_icons_size' />

                        </Link>
                        <Link
                            href="/"
                            className="">
                            <Image src="/assets/image/svg/search_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />

                        </Link>
                        <Link
                            href="/"
                            className="ps-xl-2">
                            <Image src="/assets/image/svg/three_dots_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />
                        </Link>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default DesktopHeader