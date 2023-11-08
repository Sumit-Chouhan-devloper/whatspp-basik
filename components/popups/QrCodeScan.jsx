import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function QrCodeScan() {
    return (
      <>
        <div className="qr_bg_fade min-vh-100">
          <div className="bg_light_green pb-4 ff_inter">
            <div className="bg_light_green container qr_container pt_27 pb_66 px-0 ">
              <div className="px-3 px-lg-0 mx-1 mx-md-0 d-flex align-items-center mb-4 mb-md-5 pb-lg-5">
                <Link href="/" className="text-decoration-none">
                  <Image
                    src="/assets/image/svg/logos_whatsapp_icon.svg"
                    height={39}
                    width={39}
                    alt="Logo"
                    className="qr_logo"
                  />
                </Link>
                <p className=" color_dark_black text-white font-sm fw_semibold mb-0 ps-3">
                  WHATSAPP WEB
                </p>
              </div>
              <span className="d-block mb-3"></span>
            </div>
          </div>

          <div className="qr_container container bg-white qr_scaner_box SegoeUI pt-5 px-0">
            <div className="row mx-2 justify-content-between px-lg-5 pt-xxl-5">
              <div className="col-lg-6 col-xl-7 px-lg-0 m-auto my-xxl-0 mx-lg-0">
                <h1 className="font-2xl fw_light SegoeUI color_light_gray02 mb-xxl-4 pb-4 mb-0 mb-md-2">
                  Use whatsApp on your Computer
                </h1>
                <div className="d-flex">
                  <p className="font-base-03 fw-normal color_light_gray mt-md-2 mb-0">
                    1.
                  </p>
                  <p className="font-base-03 fw-normal color_light_gray mt-md-2 ms-1 mb-0">
                    Open whatsApp on your phone
                  </p>
                </div>
                <div className="d-flex max_w_692">
                  <p className="font-base-03 fw-normal color_light_gray py-2 py-md-3 mb-0">
                    2.
                  </p>
                  <p className="font-base-03 fw-normal color_light_gray ms-1 py-2 py-md-3 mb-0">
                    Go to settings by tapping on your profile photo,
                    <strong className="font-medium font-base-03"> Menu </strong>
                    <Image
                      src="/assets/image/svg/three_Dots_menu.svg"
                      height={34}
                      width={34}
                      alt="menu"
                      className="menu_size_scan"
                    />
                    , or <strong>Setting</strong>
                    <Image
                      src="/assets/image/svg/setting_icon.svg"
                      height={34}
                      width={34}
                      alt="setting"
                      className="menu_size_scan"
                    />
                  </p>
                </div>
                <div className="d-flex">
                  <p className="font-base-03 fw-normal color_light_gray mb-0">
                    3.
                  </p>
                  <p className="font-base-03 fw-normal color_light_gray ms-1 mb-0">
                    Tap <strong> Linked devices </strong> and then
                    <strong> Link a device</strong>
                  </p>
                </div>
                <div className="d-flex">
                  <p className="font-base-03 fw-normal color_light_gray mb-0 pt-2 pt-md-3">
                    4.
                  </p>
                  <p className="font-base-03 fw-normal color_light_gray ms-1 mb-0 pt-2 pt-md-3">
                    Point your phone to this screen to capture the code
                  </p>
                </div>
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
              <span className="d-block border-bottom pt-4 mt-3 mb-3 pb-1"></span>
            </div>
            <p className="mb-2 pb-5 pt-4 px-md-3 ps-lg-5 ms-2 font-base-03 color_dark_green fw-normal mx_scaner_xxl_space">
              Link with phone number
            </p>
            <div className="text-center qr_bg_tutorial pt-2xl-5">
              <h1 className="font-2xl fw_light color_dark_black mb-0 pt-4">
                Tutorial
              </h1>
              <p className=" px-xxl-5 mx-xxl-5 font-base-03 color_lite_green fw-normal py-3 mb-0">
                Need help to get started?
              </p>
            </div>
          </div>
        </div>
      </>
    );
}

export default QrCodeScan