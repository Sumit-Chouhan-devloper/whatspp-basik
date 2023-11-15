import React from 'react'
import DesktopHeader from './DesktopHeader'
import Footer from './Footer'
import Image from 'next/image'

function DesktopChat() {
    return (
        <>
            <div className="vh-100 position-relative overflow-hidden">
                <DesktopHeader />
                <div className="overflow-y-scroll index_1 h_msg_box chat_box _h px-2">
                    {/*---------  Mis Call ---------  */}
                    <div className="text-center">
                        <p className="d-inline-block bg-white msg_bg_custom_miss mb-0 mt-2 ">
                            <Image src='/assets/image/svg/missed_call_icon.svg' width={24} height={24} alt="misscall" className='misscall_icon' />
                            <span className="ps-2 font_14 fw-normal color_lite_black mb-0" >Missed voice call at 5:20 pm</span>
                        </p>
                    </div>
                    {/*---------- Recive Msg ---------- */}
                    <div className=" ps-xl-4 mt_2px ">
                        <p className="ms-3 msg_bg_custom bg-white d-inline-block mb-0 mt_12px font_14 fw-normal color_lite_black position-relative">
                        <Image className='position-absolute desktop_messege_arrow' src="/assets/image/svg/desktop_messege_arrow.svg" width={8} height={13}  />
                            Baba how fa na?
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className=" ps-xl-4 mt_2px">
                        <p className="ms-3 msg_bg_custom_two d-inline-block bg-white mb-0 font_14 fw-normal color_lite_black position-relative">
                            U don check that thing wey i been send you yesterday?
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className=" ps-xl-4 mt_2px">
                        <p className="ms-3 msg_bg_custom_two d-inline-block bg-white mb-0 font_14 fw-normal color_lite_black position-relative">
                            How u see am na?
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    {/*----------- Send Msg ----------- */}
                    <div className="text-end me-xl-4 pe-2 mt_2px">
                        <p className="msg_bg_custom_tick msg_bg_custom_send text-start bg_green d-inline-block mb-0 mt-3 font_14 fw-normal color_lite_black position-relative">
                        <Image className='position-absolute desktop_messege_arrow_send' src="/assets/image/svg/send_svg_desktop.svg" width={8} height={13}  />
                            Oboy the thing goes well
                            <span className="position-absolute bottom_5 right_7 color_lite_black font_11 fw-normal">5:20pm
                                <Image src='/assets/image/svg/double_tick_icon.svg' className='ps-1' width={16} height={11} alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    <div className="text-end me-xl-4 pe-2 mt_2px">
                        <p className="msg_bg_custom_tick d-inline-block bg_green mb-0 text-start font_14 fw-normal color_lite_black position-relative">
                            but na wetin the client even talk? i hope say him go pay?
                            <span className="position-absolute bottom_5 right_7 color_lite_black font_11 fw-normal">5:20pm
                                <Image src='/assets/image/svg/double_tick_icon.svg' className='ps-1' width={16} height={11} alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    <div className="text-end me-xl-4 pe-2 mt_2px">
                        <p className="msg_bg_custom_tick d-inline-block text-start bg_green mb-0 font_14 fw-normal color_lite_black position-relative">
                            na how much una been discuss for the project sef?
                            <span className="position-absolute bottom_5 right_7 color_lite_black font_11 fw-normal">5:20pm
                                <Image src='/assets/image/svg/double_tick_icon.svg' className='ps-1' width={16} height={11} alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    {/*---------- Recive Msg ---------- */}
                    <div className=" ps-xl-4 mt_2px ">
                        <p className="ms-3 msg_bg_custom bg-white d-inline-block mb-0 mt_12px font_14 fw-normal color_lite_black position-relative">
                            <Image className='position-absolute desktop_messege_arrow' src="/assets/image/svg/desktop_messege_arrow.svg" width={8} height={13}  />
                            Na just 150k wey we agree on
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className=" ps-xl-4 mt_2px">
                        <p className="ms-3 msg_bg_custom_two d-inline-block bg-white mb-0 font_14 fw-normal color_lite_black position-relative">
                            but no be the reason i dy buzz u now. I need bar Baba
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className=" ps-xl-4 mt_2px">
                        <p className="ms-3 msg_bg_custom_two d-inline-block bg-white mb-0 font_14 fw-normal color_lite_black position-relative">
                            come press me the least na
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    {/*---------  Mis Call ---------  */}
                    <div className="text-center my-3">
                        <p className="d-inline-block bg-white msg_bg_custom_miss mb-0 mt_12px">
                            <Image src='/assets/image/svg/missed_call_icon.svg' width={24} height={24} alt="misscall" className='misscall_icon' />
                            <span className="ps-2 font_14 fw-normal color_lite_black mb-0" >Missed voice call at 5:20 pm</span>
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="d-inline-block bg-white msg_bg_custom_miss mb-0">
                            <Image src='/assets/image/svg/missed_call_icon.svg' width={24} height={24} alt="misscall" className='misscall_icon' />
                            <span className="ps-2 font_14 fw-normal color_lite_black mb-0" >Missed voice call at 5:20 pm</span>
                        </p>
                    </div>
                    {/*----------- Send Msg ----------- */}
                    <div className="text-end me-xl-4 pe-2 mt_2px">
                        <p className="msg_bg_custom_tick bg_green text-start d-inline-block mb-0 mt-3 font_14 fw-normal color_lite_black position-relative msg_bg_custom_send">
                        <Image className='position-absolute desktop_messege_arrow_send' src="/assets/image/svg/send_svg_desktop.svg" width={8} height={13}  />
                            Why you dy call me na?
                            <span className="position-absolute bottom_5 right_7 color_lite_black font_11 fw-normal">5:20pm
                                <Image src='/assets/image/svg/double_tick_icon.svg' className='ps-1' width={16} height={11} alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    <div className="text-end me-xl-4 pe-2 mt_2px">
                        <p className="msg_bg_custom_tick d-inline-block text-start bg_green mb-0 font_14 fw-normal color_lite_black position-relative">
                            I dy office like this oh. Any issue Bro?
                            <span className="position-absolute bottom_5 right_7 color_lite_black font_11 fw-normal">5:20pm
                                <Image src='/assets/image/svg/double_tick_icon.svg' className='ps-1' width={16} height={11} alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    {/*----------- Recived Msg ----------- */}
                    <div className=" ps-xl-4 mt_2px ">
                        <p className="ms-3 msg_bg_custom bg-white d-inline-block mb-0 mt_12px font_14 fw-normal color_lite_black position-relative">
                        <Image className='position-absolute desktop_messege_arrow' src="/assets/image/svg/desktop_messege_arrow.svg" width={8} height={13}  />
                            Oboy dash me 2k na
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    {/*---------  Mis Call ---------  */}
                    <div className="text-center">
                        <p className="d-inline-block bg-white msg_bg_custom_miss mb-0 mt-2">
                            <Image src='/assets/image/svg/missed_call_icon.svg' width={24} height={24} alt="misscall" className='misscall_icon' />
                            <span className="ps-2 font_14 fw-normal color_lite_black mb-0" >Missed voice call at 5:20 pm</span>
                        </p>
                    </div>
                    {/*---------- Recive Msg ---------- */}
                    <div className=" ps-xl-4 mt_2px ">
                        <p className="ms-3 bg-white msg_bg_custom bh-white d-inline-block mb-0 mt_12px font_14 fw-normal color_lite_black position-relative">
                        <Image className='position-absolute desktop_messege_arrow' src="/assets/image/svg/desktop_messege_arrow.svg" width={8} height={13}  />
                            Baba how fa na?
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    <div className=" ps-xl-4 mt_2px">
                        <p className="ms-3 msg_bg_custom_two d-inline-block bg-white mb-0 font_14 fw-normal color_lite_black position-relative">
                            How u see am na?
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                    {/*----------- Send Msg ----------- */}
                    <div className="text-end me-xl-4 pe-2 mt_2px">
                        <p className="msg_bg_custom_tick msg_bg_custom_send text-start bg_green d-inline-block mb-0 mt-3 font_14 fw-normal color_lite_black position-relative">
                        <Image className='position-absolute desktop_messege_arrow_send' src="/assets/image/svg/send_svg_desktop.svg" width={8} height={13}  />
                            Oboy the thing goes well
                            <span className="position-absolute bottom_5 right_7 color_lite_black font_11 fw-normal">5:20pm
                            <Image src='/assets/image/svg/double_tick_icon.svg' className='ps-1' width={16} height={11} alt="Bluetick" /></span>
                        </p>
                    </div>
                    <div className="text-end me-xl-4 pe-2 mt_2px">
                        <p className="msg_bg_custom_tick d-inline-block text-start bg_green mb-0 font_14 fw-normal color_lite_black position-relative">
                            na how much una been discuss for the project sef?
                            <span className="position-absolute bottom_5 right_7 color_lite_black font_11 fw-normal">5:20pm
                                <Image src='/assets/image/svg/double_tick_icon.svg' className='ps-1' width={16} height={11} alt="Bluetick" />
                            </span>
                        </p>
                    </div>
                    {/*---------- Recive Msg ---------- */}
                    <div className=" ps-xl-4 mt_2px mb-3 pb-1">
                        <p className="ms-3 msg_bg_custom bg-white d-inline-block mb-0 mt_12px font_14 fw-normal color_lite_black position-relative">
                        <Image className='position-absolute desktop_messege_arrow' src="/assets/image/svg/desktop_messege_arrow.svg" width={8} height={13}  />
                            Na just 150k wey we agree on
                            <span className="position-absolute bottom_5 right_12 color_lite_black font_11 fw-normal">5:20pm</span>
                        </p>
                    </div>
                </div>
                <div className="position-absolute bottom_17px w-100" >
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default DesktopChat