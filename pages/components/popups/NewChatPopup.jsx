import React from 'react'
import Errow from "../../../public/assets/image/svg/white_left_errow.svg";
import Lefterrow from "../../../public/assets/image/svg/left_gray_errow.svg";
import Group from "../../../public/assets/image/svg/group_chat_icon.svg";
import Rejoice from "../../../public/assets/image/svg/rejoice.svg";
import Gideon from "../../../public/assets/image/svg/gideon.svg";
import Image from 'next/image';
import Link from 'next/link';
import { Newchat } from "../common/Helper";

function NewChatPopup() {
    return (
        <>
            <div className="communitie_parent mx-auto ff_inter  text-center ff_inter" id='new_chat_parent'>
                <div className="bg_dark_green ps-4 ps-md-5 pb-1 pt-4 pt-md-5 text-start">
                    <h2 className='font-lg text-white fw_medium pb-4 mt-md-5 pt-3'>
                        <span className='pe-3 pe-md-4 me-md-2'>
                            <Image src={Errow} alt="Errow" />
                        </span>
                        New chat
                    </h2>
                </div>
                <div className="">
                    <div className="new_chat_input_popup position-relative border-bottom">
                        <input type="text" className='bg_gray border-0 w-100 border_radius_10 ' />
                        <Link href="/" className="text-decoration-none position-absolute left_green_errow">
                            <Image src={Lefterrow} alt="Errow" className='green_left_popup_errow' />
                        </Link>
                    </div>
                    <span className='mb-2 d-block'></span>
                    <div className="new_chat_box">
                        <div className="d-flex gap-2 pt_20 align-items-center" >
                            <div>
                                <Image src={Group}
                                    width={53}
                                    height={53}
                                    alt="NavLogo" />
                            </div>
                            <div className="text-start">
                                <p className="fs_mmd color_dark_black fw-normal mb-0">New group</p>
                            </div>
                        </div>
                    </div>
                    <div className="new_chat_box">
                        <div className="d-flex gap-2 pt_20 align-items-center" >
                            <div>
                                <Image src={Group}
                                    width={53}
                                    height={53}
                                    alt="NavLogo" />
                            </div>
                            <div className=" text-start">
                                <p className="fs_mmd color_dark_black  fw-normal mb-0">New community</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-start color_lite_green fw-normal fs_mmd ps-5 py-4'>CONTACTS ON WHATSAPP</h3>
                    <div className="new_chat_box">
                        <div className="d-flex gap-2 pt_20 " >
                            <div>
                                <Image src={Rejoice}
                                    width={53}
                                    height={53}
                                    alt="NavLogo" />
                            </div>
                            <div className=" text-start border-bottom w-100">
                                <p className="fs_mmd color_dark_black fw-normal mb-0">Rejoice Benson(You)</p>
                                <p className='opacity-50 fw_medium fs_ragular lh_25 color_dark_black mt-1 mb-3'>Message yourself</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-start color_lite_green fw-normal fs_mmd ps-5 py-4'>#</h3>
                    <div className="new_chat_box">
                        <div className="d-flex gap-2 pt_20 align-items-center">
                            <div>
                                <Image src={Gideon}
                                    width={53}
                                    height={53}
                                    alt="NavLogo" />
                            </div>
                            <div className=" text-start w-100 border-bottom">
                                <h3 className="font-md color_dark_black fw-normal mb-0">Gideon Nic</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default NewChatPopup