import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


function CommunitiePopup() {
    return (
        <>
        <div className='whatsapp_chatbox_001 mx-auto'>
            <div className="ff_inter  text-center">
                <div className="Communities_box bg_dark_green me-auto ps-4  pb-1 pt-5 text-start">
                    <h2 className=' font_19 text-white fw_medium mb-0 mt-3'>
                        <Link href="/" className='me-3 pt-4 me-md-4 pe-md-2 '>
                            <Image src="/assets/image/svg/white_left_errow.svg" height={24} width={24} alt="Errow" />
                        </Link>
                        Communities
                    </h2>
                </div>
                <div className="communitie_parent bg_white me-auto  d-flex flex-column min-vh-100">
                    <div className=" mt-4 pt-2">
                        <Image width={360} height={200} src="/assets/image/png/communitie_pop.png" alt="Communityimg" className='pt-md-1 communityimg' />
                    </div>
                    <h1 className='font_24 font_xxl_19 fw-bold mb-0 mt-4'>Stay connected with a community</h1>
                    <p className='px-2 px-sm-0 font_14 fw-normal color_dark_black community_para mx-auto mt-1 mb-0'>
                        Communities bring members together in topic- based group, and make it easy to get admin announcements. Any community you’re added to will appear here.
                    </p>
                    <Link href="/" className="text-decoration-none color_sky_blue example_communities my-2">See example communities  <Image width={10} height={13} src="/assets/image/svg/green_right_arrow.svg" alt="Right arrow" /></Link>
                    <div className=''>
                        <button className='communitiy_btn text-white fs_ragular fw_semibold'>
                            Start your community
                        </button>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}

export default CommunitiePopup