import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function DesktopHeader() {
    return (
        <>
            <div className="bg_gray position-sticky top-0">
                <nav className="d-flex align-items-center justify-content-between big_nav w-100">
                    <div className="">
                        <Link href="/">
                            <Image src="/assets/image/svg/nav_boy_icon.svg" width={50} height={50} alt="/" className='profiles' />
                        </Link>
                    </div>
                    <div className="d-flex gap-3 gap-xl-4">
                        <Link
                            href="/"
                            target="_blank"
                            className="">
                            <Image src="/assets/image/svg/call_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />
                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="px-2">
                            <Image src="/assets/image/svg/carbon_video.svg" width={24} height={24} alt="/" className='common_icons_size' />

                        </Link>
                        <Link
                            href="/"
                            target="_blank"
                            className="">
                            <Image src="/assets/image/svg/search_icon.svg" width={24} height={24} alt="/" className='common_icons_size' />

                        </Link>
                        <Link
                            href="/"
                            target="_blank"
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