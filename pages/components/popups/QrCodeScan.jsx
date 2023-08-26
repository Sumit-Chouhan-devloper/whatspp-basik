import React from 'react'
import Logo from "../../../public/assets/image/svg/logos_whatsapp_icon.svg";
import Scan from "../../../public/assets/image/svg/scan_img.svg";
import Menu from "../../../public/assets/image/svg/three_Dots_menu.svg";
import Setting from "../../../public/assets/image/svg/setting_icon.svg";
import Link from 'next/link';
import Image from 'next/image';

function QrCodeScan() {
    return (
        <>
            <div className="qr_bg_fade">
                <div className="bg_light_green pb-4 ff_inter">
                    <div className="bg_light_green container qr_container pt-4 pt-md-5 pb-5 px-0 ">
                        <div className="px-3 mx-md-0 d-flex align-items-center mb-4 mb-md-5 pb-lg-5">
                            <Link href="/" className='text-decoration-none'>
                                <Image src={Logo} alt="Logo" className='qr_logo' />
                            </Link>
                            <p className=' color_dark_black text-white font-2lg fw_semibold mb-0 ps-4'> WHATSAPP WEB</p>
                        </div>
                        <span className='d-block mb-3'></span>
                    </div>
                </div>

                <div className="qr_container container bg-white qr_scaner_box ff_inter pt-5 px-0">
                    <div className="row px-3 justify-content-between px-lg-5  mx_scaner_xxl_space ">
                        <div className="col-lg-6 col-xl-7 px-3 px-lg-0 m-auto mx-lg-0">
                            <h1 className='font-2xl fw_light color_dark_black mb-xl-5 pb-4' >Use whatsApp on your Computer</h1>
                            <p className='font-lg fw-normal color_dark_black mt-2 mb-0' >1. Open whatsApp on your phone</p>
                            <p className='font-lg fw-normal color_dark_black py-4 mb-0' >2. Tap Menu <Image src={Menu} alt="menu" /> or Setting <Image src={Setting} alt="setting" /> and select Linked Decives</p>
                            <p className='font-lg fw-normal color_dark_black mb-0' >3. Tap on Link a Device</p>
                            <p className='font-lg fw-normal color_dark_black mb-0 pt-4' >4. Point your phone to this screen to capture the code</p>
                        </div>
                        <div className="col-lg-auto mt-md-5 mt-lg-0 text-center">
                            <Image src={Scan}
                                alt="Scan"
                                width={377}
                                height={379}
                                className='scan_img' />
                        </div>
                        <span className='d-block border-bottom pb-md-5 pt-2xl-4 mt-2xl-2 mb-4 mb-md-5 mt-2xl-2'></span>
                    </div>
                    <p className=' px-md-3 text-center text-lg-start fs_mmd color_lite_green fw-normal mb-2xl-5 pb-3'>Link with phone number</p>
                    <div className="text-center qr_bg_tutorial pt-2xl-5">
                        <h1 className='font-2xl fw_light color_dark_black mb-0 pt-4' >Tutorial</h1>
                        <p className=' px-xxl-5 mx-xxl-5 fs_mmd color_lite_green fw-normal py-3 mb-0'>Need help to get started?</p>
                    </div>
                </div >

            </div>
        </>
    )
}

export default QrCodeScan