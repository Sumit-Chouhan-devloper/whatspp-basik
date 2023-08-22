import React from 'react'
import Header from './Header'
import Image from 'next/image'
import Search_Icon from "../../public/assets/svg/search_icon.svg";
import Toggle from "../../public/assets/svg/toggle_icon.svg";
import { Whatsappblocks } from "../components/common/Helper";
import Link from 'next/link';

function SmallCountentBox() {
    return (
        <>
            <Header />
            <div id='overflowTest'>
                <div className="smal_tab_box border-bottom" id='new_chat'>
                    <div className="d-flex align-items-center pb-2">
                        <div className="position-relative w-100">
                            <input type="text" placeholder='Search or start new chat' className='border-0 bg_gray w-100' />
                            <Image src={Search_Icon} alt="NavLogo" className="position-absolute searc_icon_one" />
                        </div>
                        <Link href="/" className='ps-2 ps-lg-0'>
                            <Image src={Toggle} alt="NavLogo" />
                        </Link>
                    </div>
                </div>
                <div className="chats_box">
                    {Whatsappblocks.map((obj, i) => (
                        <div className="d-flex gap-2 pt_20" key={i} >
                            <div>
                                <Image src={obj.profileone}
                                    width={56}
                                    height={56}
                                    alt="NavLogo"
                                    className='profileone' />
                            </div>
                            <div className="w-100 pb_20 border-bottom">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h1 className="font-md color_gray fw_semibold mb-0">{obj.headingone}</h1>
                                    <p className="font-sm fw_semibold color_gray mb-0" > {obj.time}</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="font-base color_gray fw_medium mb-0"> {obj.phonenumber} <span className="fw-normal"> {obj.chatheadline} </span> </h2>
                                    <p className="font-sm green_notification p-1 fw_semibold text-white mb-0 " >{obj.greennotification}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SmallCountentBox