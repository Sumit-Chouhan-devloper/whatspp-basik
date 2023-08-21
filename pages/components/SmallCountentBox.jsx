import React from 'react'
import Header from './Header'
import Image from 'next/image'
import Search_Icon from "../../public/assets/svg/search_icon.svg";
import Designers_Corner from "../../public/assets/svg/Designers_Corner.svg";
import Toggle from "../../public/assets/svg/toggle_icon.svg";
import { Whatsappblocks } from "../components/common/Helper";
import Link from 'next/link';

function SmallCountentBox() {
    return (
        <>
            <>
                <div>
                    <Header />
                    <div className="smal_tab_box border-bottom" id='new_chat'>
                        <div className="d-flex align-items-center pb-2">
                            <div className="position-relative w-100">
                                <input type="text" placeholder='Search or start new chat' className='border-0 bg_gray w-100' />
                                <Image src={Search_Icon} alt="NavLogo" className="position-absolute searc_icon_one" />
                            </div>
                            <Link href="/">
                                <Image src={Toggle} alt="NavLogo" />
                            </Link>
                        </div>
                    </div>
                    <div className="smal_tab_box">
                        {Whatsappblocks.map((obj, index) => (
                            <div className="d-flex" key={index} >
                                <div className="">

                                    <Image src={Designers_Corner} alt="NavLogo" className="" />
                                </div>
                                <div className="w-100 pb_20 border-bottom">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="font-md color_gray fw_semibold mb-0">Designers Corner</h1>
                                        <p className="font-sm fw_semibold color_gray mb-0" >3:11 pm</p>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h2 className="font-base color_gray fw_medium mb-0">+2348128225157: <span className="fw-normal">That’s a great news! Congratulations...</span> </h2>
                                        <p className="font-sm green_notification p-1 fw_semibold text-white mb-0 " >197</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="smal_tab_box">
                        <div className="d-flex">
                            <div className="">
                                <Image src={Designers_Corner} alt="NavLogo" className="" />
                            </div>
                            <div className="w-100 pb_20 border-bottom">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h1 className="font-md color_gray fw_semibold mb-0">Designers Corner</h1>
                                    <p className="font-sm fw_semibold color_gray mb-0" >3:11 pm</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h2 className="font-base color_gray fw_medium mb-0">+2348128225157: <span className="fw-normal">That’s a great news! Congratulations...</span> </h2>
                                    <p className="font-sm green_notification p-1 fw_semibold text-white mb-0 " >197</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default SmallCountentBox