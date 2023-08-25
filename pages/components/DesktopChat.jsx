import React from 'react'
import DesktopHeader from './DesktopHeader'
import Footer from './Footer'
import Misscall from "../../public/assets/image/svg/missed_call_icon.svg";
import Bluetick from "../../public/assets/image/svg/double_tick_icon.svg";

import Image from 'next/image'

function DesktopChat() {
    return (
        <>
            <div className="vh-100 position-relative overflow-hidden">
                <DesktopHeader />
                <div className="overflow-y-scroll index_1 h-100 chat_box _h px-2">
                    {/*---------  Mis Call ---------  */}
                    <div className="text-center">
                        <p className="d-inline-block bg-white msg_bg_custom_miss mb-0 mt-2 ">
                            <Image src={Misscall} alt="misscall" className='misscall_icon' />
                            <span className="ps-2 font-sm fw-normal color_lite_black mb-0" >Missed voice call at 5:20 pm</span>
                        </p>
                    </div>
                    {/*---------- Recive Msg ---------- */}
                    <div className="ms-xl-5 ps-xl-4 mt-1 ">
                        <p className="ms-2 msg_bg_custom white_corner_bg d-inline-block mb-0 mt-4 font-sm fw-normal color_lite_black position-relative">
                            Baba how fa na?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className="ms-xl-5 ps-xl-4 mt-1">
                        <p className="ms-3 msg_bg_custom d-inline-block bg-white mb-0 font-sm fw-normal color_lite_black position-relative">
                            U don check that thing wey i been send you yesterday?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className="ms-xl-5 ps-xl-4 mt-1">
                        <p className="ms-3 msg_bg_custom d-inline-block bg-white mb-0 font-sm fw-normal color_lite_black position-relative">
                            How u see am na?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    {/*----------- Send Msg ----------- */}
                    <div className="text-end me-xl-4 mt-1">
                        <p className="msg_bg_custom_tick green_corner_bg d-inline-block mb-0 mt-3 font-sm fw-normal color_lite_black position-relative">
                            Oboy the thing goes well
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm
                                <Image src={Bluetick} className='ps-1' alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    <div className="text-end me-xl-4 pe-2 mt-1">
                        <p className="msg_bg_custom_tick d-inline-block bg_green mb-0 font-sm fw-normal color_lite_black position-relative">
                            but na wetin the client even talk? i hope say him go pay?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm
                                <Image src={Bluetick} className='ps-1' alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    <div className="text-end me-xl-4 pe-2 mt-1">
                        <p className="msg_bg_custom_tick d-inline-block bg_green mb-0 font-sm fw-normal color_lite_black position-relative">
                            na how much una been discuss for the project sef?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm
                                <Image src={Bluetick} className='ps-1' alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    {/*---------- Recive Msg ---------- */}
                    <div className="ms-xl-5 ps-xl-4 mt-1 ">
                        <p className="ms-2 msg_bg_custom white_corner_bg d-inline-block mb-0 mt-4 font-sm fw-normal color_lite_black position-relative">
                            Na just 150k wey we agree on
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className="ms-xl-5 ps-xl-4 mt-1">
                        <p className="ms-3 msg_bg_custom d-inline-block bg-white mb-0 font-sm fw-normal color_lite_black position-relative">
                            but no be the reason i dy buzz u now. I need bar Baba
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className="ms-xl-5 ps-xl-4 mt-1">
                        <p className="ms-3 msg_bg_custom d-inline-block bg-white mb-0 font-sm fw-normal color_lite_black position-relative">
                            come press me the least na
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    {/*---------  Mis Call ---------  */}
                    <div className="text-center my-3">
                        <p className="d-inline-block bg-white msg_bg_custom_miss mb-0 mt-4">
                            <Image src={Misscall} alt="misscall" className='misscall_icon' />
                            <span className="ps-2 font-sm fw-normal color_lite_black mb-0" >Missed voice call at 5:20 pm</span>
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="d-inline-block bg-white msg_bg_custom_miss mb-0">
                            <Image src={Misscall} alt="misscall" className='misscall_icon' />
                            <span className="ps-2 font-sm fw-normal color_lite_black mb-0" >Missed voice call at 5:20 pm</span>
                        </p>
                    </div>
                    {/*----------- Send Msg ----------- */}
                    <div className="text-end me-xl-4 mt-1">
                        <p className="msg_bg_custom_tick green_corner_bg d-inline-block mb-0 mt-3 font-sm fw-normal color_lite_black position-relative">
                            Why you dy call me na?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm
                                <Image src={Bluetick} className='ps-1' alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    <div className="text-end me-xl-4 pe-2 mt-1">
                        <p className="msg_bg_custom_tick d-inline-block bg_green mb-0 font-sm fw-normal color_lite_black position-relative">
                            I dy office like this oh. Any issue Bro?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm
                                <Image src={Bluetick} className='ps-1' alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    {/*----------- Recived Msg ----------- */}
                    <div className="ms-xl-5 ps-xl-4 mt-1 ">
                        <p className="ms-2 msg_bg_custom white_corner_bg d-inline-block mb-0 mt-4 font-sm fw-normal color_lite_black position-relative">
                            Oboy dash me 2k na
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    {/*---------  Mis Call ---------  */}
                    <div className="text-center">
                        <p className="d-inline-block bg-white msg_bg_custom_miss mb-0 mt-2">
                            <Image src={Misscall} alt="misscall" className='misscall_icon' />
                            <span className="ps-2 font-sm fw-normal color_lite_black mb-0" >Missed voice call at 5:20 pm</span>
                        </p>
                    </div>
                    {/*---------- Recive Msg ---------- */}
                    <div className="ms-xl-5 ps-xl-4 mt-1 ">
                        <p className="ms-2 msg_bg_custom white_corner_bg d-inline-block mb-0 mt-4 font-sm fw-normal color_lite_black position-relative">
                            Baba how fa na?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className="ms-xl-5 ps-xl-4 mt-1">
                        <p className="ms-3 msg_bg_custom d-inline-block bg-white mb-0 font-sm fw-normal color_lite_black position-relative">
                            How u see am na?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    {/*----------- Send Msg ----------- */}
                    <div className="text-end me-xl-4 pe-2 mt-1">
                        <p className="msg_bg_custom green_corner_bg d-inline-block mb-0 mt-3 font-sm fw-normal color_lite_black position-relative">
                            Oboy the thing goes well
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className="text-end me-xl-4 pe-2 mt-1">
                        <p className="msg_bg_custom_tick d-inline-block bg_green mb-0 font-sm fw-normal color_lite_black position-relative">
                            na how much una been discuss for the project sef?
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm
                                <Image src={Bluetick} className='ps-1' alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    {/*---------- Recive Msg ---------- */}
                    <div className="ms-xl-5 ps-xl-4 mt-1 ">
                        <p className="ms-2 msg_bg_custom white_corner_bg d-inline-block mb-0 mt-4 font-sm fw-normal color_lite_black position-relative">
                            Na just 150k wey we agree on
                            <span className="position-absolute bottom-0 color_lite_black font-xs fw-normal">5:20pm</span>
                        </p>
                    </div>
                </div>
                <div className="position-absolute bottom-0 w-100" >
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default DesktopChat