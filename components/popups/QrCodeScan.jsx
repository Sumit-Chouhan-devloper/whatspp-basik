import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function QrCodeScan() {
    return (
      <>
        <div className="qr_bg_fade min-vh-100">
          <div className="bg_light_green pb-4 ff_inter">
            <div className="bg_light_green container qr_container pt-4 pt-md-5 pb-5 px-0 ">
              <div className="px-3 px-lg-0 mx-1 mx-md-0 d-flex align-items-center mb-4 mb-md-5 pb-lg-5">
                <Link href="/" className="text-decoration-none">
                  <Image
                    src="/assets/image/svg/logos_whatsapp_icon.svg"
                    height={70}
                    width={70}
                    alt="Logo"
                    className="qr_logo"
                  />
                </Link>
                <p className=" color_dark_black text-white font-2lg fw_semibold mb-0 ps-4">
                  {" "}
                  WHATSAPP WEB
                </p>
              </div>
              <span className="d-block mb-3"></span>
            </div>
          </div>

          <div className="qr_container container bg-white qr_scaner_box ff_inter pt-5 px-0">
            <div className="row mx-2 justify-content-between px-lg-5 pt-xxl-5">
              <div className="col-lg-6 col-xl-7 px-lg-0 m-auto my-xxl-0 mx-lg-0">
                <h1 className="font-2xl fw_light color_dark_black mb-xxl-5 pb-4 mb-0 mb-md-2">
                  Use whatsApp on your Computer
                </h1>
                <div className="d-flex">
                  <p className="font-lg fw-normal color_dark_black mt-md-2 mb-0">
                    1.
                  </p>
                  <p className="font-lg fw-normal color_light_gray mt-md-2 ms-2 mb-0">
                    Open whatsApp on your phone
                  </p>
                </div>
                <div className="d-flex">
                  <p className="font-lg fw-normal color_light_gray py-2 py-md-4 mb-0">
                    2.
                  </p>
                  <p className="font-lg fw-normal color_light_gray ms-2 py-2 py-md-4 mb-0">
                    Go to settings by tapping on your profile photo, 
                     <span className='font-medium font-lg'> Menu </span>
                    <Image
                      src="/assets/image/svg/three_Dots_menu.svg"
                      height={34}
                      width={34}
                      alt="menu"
                      className="menu_size_scan"
                    />
                    , or Setting
                    <Image
                      src="/assets/image/svg/setting_icon.svg"
                      height={34}
                      width={34}
                      alt="setting"
                      className="menu_size_scan"
                    />
                    and select Linked Decives
                  </p>
                </div>
                <p className="font-lg fw-normal color_dark_black mb-0">
                  3. Tap on Link a Device
                </p>
                <p className="font-lg fw-normal color_dark_black mb-0 pt-2 pt-md-4">
                  4. Point your phone to this screen to capture the code
                </p>
              </div>
              <div className="col-lg-auto mt-md-5 mt-lg-0 text-center">
                <div className="qr_right_space">
                  <Image
                    src="/assets/image/svg/scan_img.svg"
                    alt="Scan"
                    width={377}
                    height={379}
                    className="scan_img"
                  />
                </div>
              </div>
              <span className="d-block border-bottom pb-md-5 pt-2xl-4 mt-2xl-2 mb-4 mb-md-5 mt-2xl-2"></span>
            </div>
            <p className=" pb-xl-3 px-md-3 ps-lg-5 ms-2 mt-xl-0 mt-xxl-3 mb-2xl-5 mb-4 mb-md-5 fs_mmd color_lite_green fw-normal mx_scaner_xxl_space">
              Link with phone number
            </p>
            <div className="text-center qr_bg_tutorial pt-2xl-5">
              <h1 className="font-2xl fw_light color_dark_black mb-0 pt-4">
                Tutorial
              </h1>
              <p className=" px-xxl-5 mx-xxl-5 fs_mmd color_lite_green fw-normal py-3 mb-0">
                Need help to get started?
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default QrCodeScan