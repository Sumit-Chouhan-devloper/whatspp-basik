import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const ChannelPopup = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className=" overflow-x-hidden channel">
                <div className="bg_dark_green  pt-5 pb-3 px-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <Image src="/assets/image/svg/white_left_errow.svg" height={20} width={50} />
                            <h4 className="mb-0 fw-medium font-md text-white ms-3">
                                Channels
                            </h4>
                        </div>
                        <h4 className="text-white fw-light font-2xl mb-0">+</h4>
                    </div>
                </div>
                <div className="d-flex align-items-center mt-3 px-3">
                    <Image src="/assets/image/svg/nav_boy_icon.svg" height={60} width={60} />
                    <h3 className=" fw-medium font-base ms-3 mb-0">WhatsApp</h3>
                </div>
                <div className="d-flex align-items-center gap-2 px-3">
                    <p className="mt-4 fw-normal font-base">
                        <span data-icon="status-gif" class="">
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
                        chats super easy
                    </p>
                    <Image src="/assets/image/svg/nav_boy_icon.svg" height={80} width={80} />
                </div>
                <div className="d-flex mt-4 align-items-center gap-3 px-3">
                    <Image src="/assets/image/svg/nav_boy_icon.svg" height={80} width={80} />
                    <h4 className=" fw-medium font-md mb-0">WhatsApp Help</h4>
                </div>
                <h4 className=" fw-normal color_gray font-md mt-2 ms-3 px-3">Hi</h4>
                <h4 className=" fw-normal color_gray font-md mt-2 ms-3 px-3">
                    28/10/2023
                </h4>
                <div className="d-flex justify-content-between mt-5 px-3 ">
                    <h4 className="fw-normal font-lg">Find channels</h4>
                    <h4>
                        <a
                            href="#"
                            className=" fw-normal font-lg text-decoration-none color_dark_green"
                        >
                            See all &gt;
                        </a>
                    </h4>
                </div>  
                <Slider    {...settings} className="mt-3">
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                    <div className="channel-card">
                        <div className="d-flex position-relative justify-content-center">
                            <Image src="/assets/channel-1.svg" height={80} width={80} />
                            <Image
                                className=" position-absolute ok-img"
                                src="/assets/ok.svg"
                                height={15}
                                width={15}
                            />
                        </div>
                        <h4 className="fw-normal font-base text-center mt-3 mb-0">
                            Rahul Kumar
                        </h4>
                        <div className="text-center">
                            <a
                                href="#"
                                className="fw-normal font-md text-decoration-none color_dark_green mb-0 mt-3"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default ChannelPopup;