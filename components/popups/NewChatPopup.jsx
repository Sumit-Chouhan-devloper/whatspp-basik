import React from "react";
import Image from "next/image";
import Link from "next/link";
function NewChatPopup() {
  return (
    <>
      <div className=" ff_inter  text-center ff_inter" id="new_chat_parent">
        <div className="Communities_box bg_dark_green me-auto ps-4  pb-1 pt-5 text-start">
          <h2 className=' font_19 text-white fw_medium mb-0 mt-3'>
            <Link href="/" className='me-3 pt-4 me-md-4 pe-md-2 '>
              <Image src="/assets/image/svg/white_left_errow.svg" height={24} width={24} alt="Errow" />
            </Link>
            New chat
          </h2>
        </div>
        <div className="communitie_parent me-auto bg-white min-vh-100">
          <div className="new_chat_input_popup position-relative border-bottom">
            <input
              type="text"
              placeholder="search name or number"
              className="bg_gray border-0 w-100 border_radius_10 "
            />
            <Link
              href="#"
              className="text-decoration-none position-absolute left_green_errow"
            >
              <Image
                src="/assets/image/svg/search_icon.svg"
                height={24}
                width={24}
                alt="Errow"
                className="green_left_popup_errow"
              />
            </Link>
          </div>
          <span className="mb-0 d-block"></span>
          <div className="new_chat_box">
            <div className="d-flex gap-2 gap-sm-3 pt_20 align-items-center">
              <div>
                <Image
                  src="/assets/image/svg/group_chat_icon.svg"
                  width={48}
                  height={48}
                  alt="Group"
                  className="common_logo"
                />
              </div>
              <div className="text-start w-100">
                <p className="fs_mmd color_dark_black fw-normal mb-0 ">
                  New group
                </p>
              </div>
            </div>
            <span className="border-bottom ms-auto bottom_border_w d-block"></span>
          </div>
          <div className="new_chat_box pb-1">
            <div className="d-flex gap-2 gap-sm-3 align-items-center">
              <div>
                <Image
                  src="/assets/image/svg/new_comunity.svg"
                  width={48}
                  height={48}
                  alt="Comunnity"
                  className="common_logo"
                />
              </div>
              <div className="text-start w-100">
                <p className="fs_mmd color_dark_black fw-normal mb-0 ">
                  New community
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-start color_light_green fw-normal mb-0 font-base ms-5 pt-5">
            CONTACTS ON WHATSAPP
          </h3>
          <span className="border-bottom ms-auto bottom_border_w_two d-block"></span>
          <div className="new_chat_box">
            <div className="d-flex gap-2 gap-sm-3 align-items-center">
              <div>
                <Image
                  src="/assets/image/svg/rejoice.svg"
                  width={48}
                  height={48}
                  alt="Rejoice"
                  className="common_logo"
                />
              </div>
              <div className="text-start w-100">
                <p className="fs_mmd color_dark_black fw-normal mb-0 ">
                  Rejoice Benson(You)
                </p>
                <p className="fs_ragular color_dark_black fw-normal mb-0 opacity-50 mt-1">
                  Message yourself
                </p>
              </div>
            </div>
            <span className="border-bottom ms-auto bottom_border_w d-block"></span>
          </div>
          <h3 className="text-start color_light_green fw-normal fs_mmd ms-2 ms-sm-3 ps-4">
            #
          </h3>
          <span className="border-bottom ms-auto bottom_border_w_two d-block"></span>
          <div className="new_chat_box">
            <div className="d-flex gap-2 gap-sm-3 align-items-center">
              <div>
                <Image
                  src="/assets/image/svg/gideon.svg"
                  width={48}
                  height={48}
                  alt="Gideon"
                  className="common_logo"
                />
              </div>
              <div className="text-start w-100">
                <p className="fs_mmd color_dark_black fw-normal mb-0 ">
                  Gideon Nic
                </p>
              </div>
            </div>
            <span className="border-bottom ms-auto bottom_border_w d-block"></span>
          </div>
          <div className="new_chat_box">
            <div className="d-flex gap-2 gap-sm-3 align-items-center">
              <div>
                <Image
                  src="/assets/image/svg/danialel_kalio_dp.svg"
                  width={48}
                  height={48}
                  alt="Danial"
                  className="common_logo"
                />
              </div>
              <div className="text-start w-100">
                <p className="fs_mmd color_dark_black fw-normal mb-0 ">
                  Daniel Kalio
                </p>
                <p className="fs_ragular color_dark_black fw-normal mb-0 opacity-50 mt-1">
                  Stay bold... life is full of ups & down
                </p>
              </div>
            </div>
            <span className="border-bottom ms-auto bottom_border_w d-block"></span>
          </div>
          <div className="new_chat_box">
            <div className="d-flex gap-2 gap-sm-3 align-items-center">
              <div>
                <Image
                  src="/assets/image/svg/goodgod_dp.svg"
                  width={48}
                  height={48}
                  alt="goodgod"
                  className="common_logo"
                />
              </div>
              <div className="text-start w-100">
                <p className="fs_mmd color_dark_black fw-normal mb-0 ">
                  Goodgod UI/UX
                </p>
                <p className="fs_ragular color_dark_black fw-normal mb-0 opacity-50 mt-1">
                  Hi
                </p>
              </div>
            </div>
            <span className="border-bottom ms-auto bottom_border_w d-block"></span>
          </div>
          <div className="new_chat_box">
            <div className="d-flex gap-2 gap-sm-3 align-items-center">
              <div>
                <Image
                  src="/assets/image/svg/alex_dp.svg"
                  width={48}
                  height={48}
                  alt="Alex"
                  className="common_logo"
                />
              </div>
              <div className="text-start w-100">
                <p className="fs_mmd color_dark_black fw-normal mb-0 ">
                  Alex (Tech Sis)
                </p>
              </div>
            </div>
            <span className="border-bottom ms-auto bottom_border_w d-block"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewChatPopup;
