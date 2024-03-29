import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

function QrCodeScan() {
  const [svgHidden, setSvgHidden] = useState(false);

  const hideSvgAndStartVideo = () => {
    // Hide the SVG element
    setSvgHidden(true);

    // Get the video element and play it
    const video = document.getElementById("myVideo");
    video.play();
  };

  return (
    <>
      <div className="qr_bg_fade bg_light_black min-vh-100">
        <div className="bg_light_green px-md-4 pb-4 ff_inter">
          <div className="bg_light_green container  pt_27 pb_66 px-0 ">
            <div className="px-lg-0 mx-1 mx-md-0 d-flex align-items-center mb-4 mb-md-5 pb-2xl-5 pb-lg-2">
              <Link href="/" className="text-decoration-none">
                <Image
                  src="/assets/image/svg/logos_whatsapp_icon.svg"
                  height={39}
                  width={39}
                  alt="Logo"
                  className="qr_logo"
                />
              </Link>
              <p className="  text-white font-sm fw_semibold mb-0 ps-3">
                WHATSAPP WEB
              </p>
            </div>
            <span className="d-block mb-3"></span>
          </div>
        </div>
        <div className="px-md-4 pb_92 ">
          <div className=" container bg-white qr_scaner_box SegoeUI pt-5 px-0">
            <div className="get_app_div_border br_6 get_app_box_spacing">
              <div className="d-flex align-items-center justify-content-between">
                {/* SVG  */}
                <div>
                  <span data-icon="wa-desktop" class="">
                    <svg
                      viewBox="0 0 76 51"
                      height="55"
                      preserveAspectRatio="xMidYMid meet"
                      class=""
                      fill="none"
                    >
                      <rect
                        x="9"
                        y="2.04663"
                        width="58"
                        height="37.8605"
                        fill="#00A884"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 3H66V38.8837H10V3ZM7 38.8837V3C7 1.34315 8.34315 0 10 0H66C67.6569 0 69 1.34315 69 3V38.8837H76V40C76 42.2091 74.2091 44 72 44H66H10H4C1.79086 44 0 42.2091 0 40V38.8837H7Z"
                        fill="#54656F"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 3H66V38.8837H10V3ZM7 38.8837V3C7 1.34315 8.34315 0 10 0H66C67.6569 0 69 1.34315 69 3V38.8837H76V40C76 42.2091 74.2091 44 72 44H66H10H4C1.79086 44 0 42.2091 0 40V38.8837H7Z"
                        fill="black"
                        fill-opacity="0.6"
                      ></path>
                      <rect
                        x="21"
                        y="17"
                        width="34"
                        height="34"
                        rx="2"
                        fill="#25D366"
                      ></rect>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.0892 33.9037C27.0917 27.8907 32.0063 23 38.0448 23C40.9738 23.0012 43.7255 24.1367 45.7937 26.1974C47.8619 28.258 49.0011 30.9991 49 33.9124C48.9975 39.9254 44.0826 44.8167 38.0447 44.8167C36.2561 44.8161 34.5003 44.3824 32.9299 43.5562L27.4448 44.9881C27.1805 45.0571 26.9406 44.8141 27.0131 44.5507L28.4779 39.2259C27.5663 37.6025 27.0885 35.7738 27.0892 33.9037ZM38.0393 42.8705H38.0357C36.4369 42.8699 34.8688 42.4424 33.5009 41.6345L33.1755 41.4423L29.8034 42.3227L30.7034 39.0504L30.4916 38.7149C29.5997 37.3031 29.1286 35.6714 29.1294 33.9958C29.1313 29.1067 33.1283 25.1291 38.0429 25.1291C40.4227 25.1299 42.6597 26.0534 44.342 27.7296C46.0241 29.4057 46.95 31.6336 46.9491 34.003C46.9471 38.8925 42.9502 42.8705 38.0393 42.8705ZM41.0435 35.2728C41.2876 35.3625 42.5971 36.0117 42.8635 36.146C42.9154 36.1722 42.964 36.1959 43.0091 36.2178C43.1949 36.3083 43.3204 36.3694 43.3739 36.4595C43.4405 36.5714 43.4405 37.1088 43.2186 37.7358C42.9966 38.3627 41.9325 38.9349 41.4208 39.0119C40.9619 39.081 40.3812 39.1099 39.7432 38.9056C39.3564 38.7819 38.8602 38.6168 38.2248 38.3402C35.7281 37.2539 34.0409 34.8157 33.7217 34.3544C33.6993 34.322 33.6836 34.2994 33.6749 34.2877L33.6727 34.2848C33.5318 34.0953 32.5873 32.8255 32.5873 31.5112C32.5873 30.275 33.1899 29.627 33.4673 29.3287C33.4863 29.3083 33.5038 29.2895 33.5195 29.2722C33.7636 29.0036 34.0522 28.9364 34.2298 28.9364C34.4073 28.9364 34.5851 28.9381 34.7402 28.9459C34.7594 28.9468 34.7793 28.9467 34.7999 28.9466C34.9551 28.9457 35.1486 28.9446 35.3395 29.4066C35.4128 29.584 35.5199 29.8469 35.633 30.1243C35.8624 30.687 36.1161 31.3095 36.1607 31.3994C36.2273 31.5338 36.2717 31.6904 36.1829 31.8696C36.1696 31.8965 36.1573 31.9218 36.1455 31.946C36.0788 32.0832 36.0298 32.1842 35.9165 32.3173C35.8722 32.3695 35.8264 32.4257 35.7806 32.482C35.6888 32.5946 35.597 32.7073 35.517 32.7876C35.3837 32.9214 35.2449 33.0666 35.4003 33.3353C35.5556 33.604 36.0902 34.4829 36.8819 35.1945C37.7331 35.9596 38.4729 36.2829 38.8478 36.4468C38.921 36.4788 38.9803 36.5047 39.0238 36.5267C39.2901 36.6611 39.4455 36.6386 39.6009 36.4595C39.7562 36.2804 40.2667 35.6758 40.4443 35.4071C40.6218 35.1385 40.7994 35.1832 41.0435 35.2728Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="d-flex flex-md-row flex-column align-items-center">
                  <div className="px-lg-4 ps-2">
                    <p className="color_lite_black font-base-02 mb-0 fw-normal">
                      Download WhatsApp for Windows
                    </p>
                    <p className="mb-0 mw _494 fs_13 d-md-block d-none">
                      Get calling, screen sharing and a faster experience with
                      the new Windows app.
                    </p>
                  </div>
                  <button className="get_the_app_button font-sm mt-md-0 mt-1 text-white fw-medium bg_dark_green border-0 d-flex justify-content-center align-items-center p-0">
                    Get the app
                  </button>
                </div>
              </div>
            </div>
            <div className="row mx-2 justify-content-between px-md-5 px-3 pt-xxl-5 pt-4 mt-xxl-0 mt-2">
              <div className="col-lg-6 col-xl-8 px-lg-0 m-auto my-xxl-0 mx-lg-0">
                <h1 className="font-2xl fw_light SegoeUI color_light_gray02 mb-xxl-4 pb-4 mb-0 mb-md-2">
                  Use whatsApp on your Computer
                </h1>
                <div className="d-flex">
                  <p className="font-lg fw-normal color_light_gray mt-md-2 mb-0">
                    1.
                  </p>
                  <p className="font-lg fw-normal color_light_gray mt-md-2 ms-1 mb-0">
                    Open whatsApp on your phone
                  </p>
                </div>
                <div className="d-flex max_w_692">
                  <p className="font-lg fw-normal color_light_gray py-2 py-md-3 mb-0">
                    2.
                  </p>
                  <p className="font-lg fw-normal color_light_gray ms-1 py-2 py-md-3 mb-0">
                    Go to settings by tapping on your profile photo,
                    <strong className=" font-lg mx-1">Menu</strong>
                    <Image
                      src="/assets/image/svg/three_Dots_menu.svg"
                      height={34}
                      width={34}
                      alt="menu"
                      className="menu_size_scan mx-1"
                    />
                    , or <strong>Setting</strong>
                    <Image
                      src="/assets/image/svg/setting_icon.svg"
                      height={34}
                      width={34}
                      alt="setting"
                      className="menu_size_scan mx-1"
                    />
                  </p>
                </div>
                <div className="d-flex">
                  <p className="font-lg fw-normal color_light_gray mb-0">3.</p>
                  <p className="font-lg fw-normal color_light_gray ms-1 mb-0">
                    Tap <strong> Linked devices </strong> and then
                    <strong> Link a device</strong>
                  </p>
                </div>
                <div className="d-flex">
                  <p className="font-lg fw-normal color_light_gray mb-0 pt-2 pt-md-3">
                    4.
                  </p>
                  <p className="font-lg fw-normal color_light_gray ms-1 mb-0 pt-2 pt-md-3">
                    Point your phone to this screen to capture the QR code
                  </p>
                </div>
              </div>
              <div className="col-lg-auto mt-md-5 mt-4 pt-md-0 pt-2 mt-lg-0 text-center">
                <div>
                  <Image
                    src="/assets/image/svg/scan_img.svg"
                    alt="Scan"
                    width={264}
                    height={264}
                    className="scan_img"
                  />
                </div>
              </div>
              <span className="d-block border-bottom pt-4 mt-3 mb-3 pb-1 mx-4"></span>
            </div>
            <p className="mb-2 pb-5 pt-4 px-md-3 ps-lg-5 ms-2 font-base-03 color_dark_green fw-normal mx_scaner_xxl_space">
              Link with phone number
            </p>
            <div className="qr_bg_tutorial">
              <div className="text-center">
                <h1 className="font-2lg fw_light color_light_gray02 mb-0 pt_40">
                  Tutorial
                </h1>
                <p className=" px-xxl-5 mx-xxl-5 font-sm color_dark_green fw-normal pt-3 mb-0">
                  Need help to get started?
                </p>
              </div>
              <div className="d-flex justify-content-center position-relative my-3 align-items-center py-4">
                <video
                  controls
                  className="video_height_width w-100"
                  src="/assets/video/whatsapp_qrscan_video.mp4"
                  id="myVideo"
                ></video>
                <div
                  className={`position-absolute z-1 cursor_pointer ${
                    svgHidden ? "hidden" : ""
                  }`}
                  onClick={hideSvgAndStartVideo}
                >
                  <Image
                    src="/assets/image/png/qr_scan_video_thumbnail.png"
                    height={314}
                    width={560}
                    alt="video thumbnail"
                    className="video_height_width w-100"
                  />
                </div>
                <div
                  className={`position-absolute z-2 cursor_pointer bg_overlay ${
                    svgHidden ? "hidden" : ""
                  }`}
                  onClick={hideSvgAndStartVideo}
                >
                  <svg
                    className="ms-1 opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="34"
                    viewBox="0 0 28 34"
                  >
                    <path
                      fill="#FFF"
                      d="M1 4.983v24.034a2.982 2.982 0 0 0 4.564 2.53L24.792 19.53a2.981 2.981 0 0 0 0-5.058L5.563 2.454A2.983 2.983 0 0 0 1 4.983z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <span className="d-block mb-3"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default QrCodeScan;
