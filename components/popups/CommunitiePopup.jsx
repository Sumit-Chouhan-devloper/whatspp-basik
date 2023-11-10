import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function CommunitiePopup() {
    return (
        <>
            <div className="ff_inter  text-center">
                <div className="bg_dark_green">
                    <div className="communitie_parent mx-auto ps-4 ps-md-5 pb-1 pt-4 pt-md-5 text-start">
                        <h2 className='font-lg text-white fw_medium pb-4 mt-md-5 pt-3'>
                            <Link href="/" className='me-3 me-md-4 pe-md-2'>
                                <Image src="/assets/image/svg/white_left_errow.svg" height={35} width={35} alt="Errow" />
                            </Link>
                            Communities
                        </h2>
                    </div>
                </div>
                <div className="communitie_parent mx-auto  d-flex flex-column">
                    <div className="pt-md-5 my-5 pb-md-2">
                        <Image width={482} height={257} src="/assets/image/png/communitie_pop.png" alt="Communityimg" className='pt-md-1 communityimg' />
                    </div>
                    <h1 className='font-xl color_dark_black fw_semibold mb-0'>Stay connected with a community</h1>
                    <p className='px-2 px-sm-0 fs_ragular fw-normal color_dark_black community_para mx-auto my-3'>
                        Communities bring members together in topic- based group, and make it easy to get admin announcements. Any community you’re added to will appear here.
                    </p>
                    <Link href="/" className="text-decoration-none color_sky_blue example_communities">See example communities  <Image width={24} height={24} src="/assets/image/svg/green_right_arrow.svg" alt="Right arrow" /></Link>
                    <div className=' mt-3 mt-sm-4'>
                        <button className='communitiy_btn text-white fs_ragular fw_semibold'>
                            Start your community
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CommunitiePopup