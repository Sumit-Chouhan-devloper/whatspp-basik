import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChannelPopup = () => {
  return (
    <>
    <div className='whatsapp_chatbox_001 mx-auto'>
      <div className=" overflow-x-hidden ">
        <div className="Communities_box bg_dark_green me-auto ps-4  pb-1 pt-5 text-start d-flex justify-content-between">
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
          <h4 className="text-white fw-light font-2xl mb-0 me-4">+</h4>
        </div>
        <div className="bg-white channel min-vh-100">
          <div className="channel_pera">
            <p className="channel_pera_one font_19  text-center mb-1">
              Stay updated on your favourite topics
            </p>
            <p className="channel_pera_two font_19  text-center mb-0">
              Find channels to follow below
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2 justify-content-center align-items-center">
            <div className="channel-card">
              <div className="d-flex position-relative justify-content-center">
                <Image
                  src="/assets/image/png/profilepopup.png"
                  height={64}
                  width={64}
                />
                <Image
                  className=" position-absolute border-3 border-white ok-img"
                  src="/assets/image/svg/green_true.svg"
                  height={15}
                  width={15}
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
            <div className="channel-card">
              <div className="d-flex position-relative justify-content-center">
                <Image
                  src="/assets/image/svg/gideon.svg"
                  height={64}
                  width={64}
                />
                <Image
                  className=" position-absolute border-3 border-white ok-img"
                  src="/assets/image/svg/green_true.svg"
                  height={15}
                  width={15}
                />
              </div>
              <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                Gideon
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
            <div className="channel-card">
              <div className="d-flex position-relative justify-content-center">
                <Image
                  src="/assets/image/svg/danialel_kalio_dp.svg"
                  height={64}
                  width={64}
                />
                <Image
                  className=" position-absolute border-3 border-white ok-img"
                  src="/assets/image/svg/green_true.svg"
                  height={15}
                  width={15}
                />
              </div>
              <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                Danialel Kalio
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
            <div className="channel-card">
              <div className="d-flex position-relative justify-content-center">
                <Image
                  src="/assets/image/svg/goodgod.svg"
                  height={64}
                  width={64}
                />
                <Image
                  className=" position-absolute border-3 border-white ok-img"
                  src="/assets/image/svg/green_true.svg"
                  height={15}
                  width={15}
                />
              </div>
              <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                Anil Kumar
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
            <div className="channel-card">
              <div className="d-flex position-relative justify-content-center">
                <Image
                  src="/assets/image/svg/alextwo.svg"
                  height={64}
                  width={64}
                />
                <Image
                  className=" position-absolute border-3 border-white ok-img"
                  src="/assets/image/svg/green_true.svg"
                  height={15}
                  width={15}
                />
              </div>
              <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                Sachin Kumar
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
            <div className="channel-card">
              <div className="d-flex position-relative justify-content-center">
                <Image
                  src="/assets/image/png/profilepopup.png"
                  height={64}
                  width={64}
                />
                <Image
                  className=" position-absolute border-3 border-white ok-img"
                  src="/assets/image/svg/green_true.svg"
                  height={15}
                  width={15}
                />
              </div>
              <h4 className="fw-normal font_14 text-center mt-3 mb-0">
                Alex Kumar
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
          </div>
          <div className=" my-4 text-center">
            <button className="channels_btn font_14 text-white fs_ragular fw_semibold">
              Find channels
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ChannelPopup;
