import React from 'react'
import Errow from "../../../public/assets/svg/white_left_errow.svg";
import Communityimg from "../../../public/assets/image/communitie_pop.png";
import Image from 'next/image';
import Link from 'next/link';


function CommunitiePopup() {
    return (
        <>
            <div className="communitie_parent mx-auto ff_inter  text-center">
                <div className="bg_dark_green ps-5 pb-1 pt-4 pt-md-5 text-start">
                    <h2 className='font-lg text-white fw_medium pb-4 mt-md-5 pt-3'>
                        <span className='pe-4 me-2'>
                            <Image src={Errow} alt="Errow" />
                        </span>
                        Communities
                    </h2>
                </div>

                <div className="pt-md-5 my-5 pb-2">
                    <Image width={482} height={257} src={Communityimg} alt="Communityimg" className='pt-3 communityimg' />
                </div>
                <h1 className='font-xl color_dark_black fw_semibold'>Stay connected with a community</h1>
                <p className='fs_ragular fw-normal color_dark_black community_para mx-auto my-3'>
                    Communities bring members together in topic- based group, and make it easy to get admin announcements. Any community you’re added to will appear here. <Link href="/" className="text-decoration-none color_sky_blue">Learn more</Link>
                </p>
                <button className='communitiy_btn text-white fs_ragular fw_semibold'>
                    Start your community
                </button>
            </div>
        </>
    )
}

export default CommunitiePopup