import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const ChannelPopup = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3.5,
    arrows: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="qr_bg_fade bg_light_black min-vh-100">
        <div className="bg_light_green px-md-4 pb-4 ff_inter">
          <div className="bg_light_green container-xxl  pt_27 pb_66 px-0 ">
            <span className="d-block mb-3"></span>
          </div>
        </div>
        <div className=" overflow-x-hidden container-xxl min-vh-91 qr_scaner_box bg-brown SegoeUI px-0 ">
          <div className="Communities_box bg_dark_green me-auto px-4  pb-1 pt-5 text-start d-flex justify-content-between">
            <h2 className="font_19 text-white fw_medium mb-0 mt-3">
              <Link href="/" className="me-3 pt-4 me-md-4 pe-md-2 ">
                <Image
                  src="/assets/image/svg/white_left_errow.svg"
                  height={24}
                  width={24}
                  alt="Errow"
                />
              </Link>
              Channels
            </h2>
            <Image
              src="/assets/image/svg/plus.svg"
              height={24}
              width={24}
              alt="Errow"
              className="mt-3"
            />
          </div>
          <div className="bg-white channel min-vh-91 px-3">
            <div className="d-flex align-items-center pt-3 gap-3">
              <div className="whatsapp-img d-flex justify-content-center">
                <div className=" d-flex align-items-center">
                  <Image
                    src="/assets/image/svg/whatsapp-img.svg"
                    height={35}
                    width={35}
                    alt="Errow"
                  />
                </div>
              </div>
              <h4 className="font_19 text-black ff_inter fw_medium mb-0">
                WhatsApp
              </h4>
            </div>

            <div className="d-flex align-items-center gap-3">
              <p className="mt-3 fw-normal font-base max_w_300 color_gray">
                <span data-icon="status-gif" class="pe-1">
                  <svg
                    viewBox="0 0 20 20"
                    height="20"
                    width="20"
                    preserveAspectRatio="xMidYMid meet"
                    class=""
                    version="1.1"
                    x="0px"
                    y="0px"
                    enable-background="new 0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M4.878,3.9h10.285c1.334,0,1.818,0.139,2.306,0.4c0.488,0.261,0.871,0.644,1.131,1.131 C18.861,5.919,19,6.403,19,7.737v4.351c0,1.334-0.139,1.818-0.4,2.306c-0.261,0.488-0.644,0.871-1.131,1.131 c-0.488,0.261-0.972,0.4-2.306,0.4H4.878c-1.334,0-1.818-0.139-2.306-0.4c-0.488-0.261-0.871-0.644-1.131-1.131 s-0.4-0.972-0.4-2.306V7.737c0-1.334,0.139-1.818,0.4-2.306S2.084,4.561,2.572,4.3S3.544,3.9,4.878,3.9z M11.071,9.836L11.071,9.836 c-0.001-0.783,0.002-1.567-0.003-2.35c-0.002-0.281-0.2-0.519-0.458-0.577c-0.283-0.063-0.568,0.064-0.683,0.328 C9.881,7.343,9.865,7.471,9.865,7.589c-0.004,1.492-0.003,2.984-0.002,4.476c0,0.06,0.002,0.121,0.008,0.181 c0.026,0.248,0.225,0.462,0.468,0.508c0.397,0.076,0.728-0.196,0.731-0.611C11.074,11.375,11.071,10.606,11.071,9.836z  M7.338,10.523c0,0.274-0.005,0.521,0.002,0.768c0.003,0.093-0.031,0.144-0.106,0.19c-0.279,0.172-0.583,0.254-0.905,0.292 C5.51,11.87,4.757,11.44,4.457,10.692c-0.147-0.367-0.178-0.748-0.125-1.14c0.131-0.97,1.022-1.647,1.984-1.513 c0.359,0.05,0.674,0.194,0.968,0.396c0.157,0.108,0.327,0.158,0.513,0.112c0.243-0.06,0.398-0.219,0.448-0.464 c0.055-0.273-0.055-0.484-0.278-0.637C7.176,6.901,6.29,6.787,5.384,6.982c-2.006,0.432-2.816,2.512-2.08,4.196 c0.481,1.101,1.379,1.613,2.546,1.693c0.793,0.054,1.523-0.148,2.2-0.56c0.265-0.161,0.438-0.385,0.447-0.698 c0.014-0.522,0.014-1.045,0.001-1.568c-0.007-0.297-0.235-0.549-0.51-0.557C7.442,9.474,6.895,9.477,6.348,9.487 c-0.21,0.004-0.394,0.181-0.446,0.385c-0.055,0.217,0.023,0.447,0.217,0.559c0.092,0.053,0.207,0.083,0.313,0.088 C6.728,10.53,7.024,10.523,7.338,10.523z M13.815,8.004h0.171c0.811,0,1.623,0.002,2.434-0.001c0.383-0.001,0.632-0.286,0.577-0.654 c-0.041-0.274-0.281-0.455-0.611-0.455c-1.025-0.001-2.049-0.001-3.074,0c-0.474,0-0.711,0.237-0.711,0.713c0,1.078,0,2.155,0,3.233 c0,0.415,0,0.83,0,1.246c0,0.243,0.096,0.436,0.306,0.56c0.41,0.241,0.887-0.046,0.896-0.545c0.009-0.504,0.002-1.008,0.002-1.511 v-0.177h0.169c0.7,0,1.4,0.001,2.1-0.001c0.259-0.001,0.463-0.153,0.535-0.388c0.071-0.235-0.001-0.488-0.213-0.611 c-0.118-0.068-0.27-0.103-0.407-0.105c-0.667-0.01-1.335-0.005-2.003-0.005h-0.172V8.004z"
                    ></path>
                  </svg>
                </span>
                New: Passkeys for Android Unlock your account using your face,
                fingerprint or pin with Passkeys. They make getting back to your
                chats super easy, secure an...
              </p>
              <Image
                src="/assets/image/svg/whatsapp-img-2.svg"
                height={60}
                width={60}
              />
            </div>
            <p className=" color_gray fw-normal font-sm">Yesterday</p>
            <div className="line"></div>
            <div className="d-flex align-items-center gap-3 mt-4">
              <Image
                src="/assets/image/svg/chat-img.svg"
                height={55}
                width={55}
                className="chat-img"
              />
              <h4 className="font_19 text-black ff_inter fw_medium mb-0">
                Loked Chats
              </h4>
            </div>
            <h4 className=" color_gray m-0 mt-3 fw-normal font-base">Hi</h4>
            <h4 className=" color_gray m-0 mt-3 fw-normal font-sm">
              18/10/2023
            </h4>
            <div className="line mt-3"></div>
            <div className="d-flex justify-content-between">
              <h4 className=" font-base-03 fw-medium color-black mt-4">
                Find channels
              </h4>
              <h4 className=" font-base-03 fw-normal color_dark_green mt-4">
                Sell all &gt;
              </h4>
            </div>
            <div className="text-center mt-2">
              <Slider {...settings} className="py-1">
                <div className="channel-card my-1">
                  <div className="d-flex position-relative justify-content-center">
                    <Image
                      src="/assets/image/png/profilepopup.png"
                      height={75}
                      width={75}
                    />
                    <Image
                      className=" position-absolute border-3 border-white ok-img"
                      src="/assets/image/svg/green_true.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                  <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                    Rahul Kumar
                  </h4>
                  <div className="text-center">
                    <a
                      href="#"
                      className="fw-normal font-md text-decoration-none color_dark_green font_14 mb-0 mt-3"
                    >
                      Follow
                    </a>
                  </div>
                </div>
                <div className="channel-card my-1">
                  <div className="d-flex position-relative justify-content-center">
                    <Image
                      src="/assets/image/png/profilepopup.png"
                      height={75}
                      width={75}
                    />
                    <Image
                      className=" position-absolute border-3 border-white ok-img"
                      src="/assets/image/svg/green_true.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                  <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                    Rahul Kumar
                  </h4>
                  <div className="text-center">
                    <a
                      href="#"
                      className="fw-normal font-md text-decoration-none color_dark_green font_14 mb-0 mt-3"
                    >
                      Follow
                    </a>
                  </div>
                </div>
                <div className="channel-card my-1">
                  <div className="d-flex position-relative justify-content-center">
                    <Image
                      src="/assets/image/png/profilepopup.png"
                      height={75}
                      width={75}
                    />
                    <Image
                      className=" position-absolute border-3 border-white ok-img"
                      src="/assets/image/svg/green_true.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                  <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                    Rahul Kumar
                  </h4>
                  <div className="text-center">
                    <a
                      href="#"
                      className="fw-normal font-md text-decoration-none color_dark_green font_14 mb-0 mt-3"
                    >
                      Follow
                    </a>
                  </div>
                </div>
                <div className="channel-card my-1">
                  <div className="d-flex position-relative justify-content-center">
                    <Image
                      src="/assets/image/png/profilepopup.png"
                      height={75}
                      width={75}
                    />
                    <Image
                      className=" position-absolute border-3 border-white ok-img"
                      src="/assets/image/svg/green_true.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                  <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                    Rahul Kumar
                  </h4>
                  <div className="text-center">
                    <a
                      href="#"
                      className="fw-normal font-md text-decoration-none color_dark_green font_14 mb-0 mt-3"
                    >
                      Follow
                    </a>
                  </div>
                </div>
                <div className="channel-card my-1">
                  <div className="d-flex position-relative justify-content-center">
                    <Image
                      src="/assets/image/png/profilepopup.png"
                      height={75}
                      width={75}
                    />
                    <Image
                      className=" position-absolute border-3 border-white ok-img"
                      src="/assets/image/svg/green_true.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                  <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                    Rahul Kumar
                  </h4>
                  <div className="text-center">
                    <a
                      href="#"
                      className="fw-normal font-md text-decoration-none color_dark_green font_14 mb-0 mt-3"
                    >
                      Follow
                    </a>
                  </div>
                </div>
                <div className="channel-card my-1">
                  <div className="d-flex position-relative justify-content-center">
                    <Image
                      src="/assets/image/png/profilepopup.png"
                      height={75}
                      width={75}
                    />
                    <Image
                      className=" position-absolute border-3 border-white ok-img"
                      src="/assets/image/svg/green_true.svg"
                      height={20}
                      width={20}
                    />
                  </div>
                  <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                    Rahul Kumar
                  </h4>
                  <div className="text-center">
                    <a
                      href="#"
                      className="fw-normal font-md text-decoration-none color_dark_green font_14 mb-0 mt-3"
                    >
                      Follow
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChannelPopup;