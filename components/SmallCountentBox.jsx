import React, { useState } from "react";
import Header from "./Header";
import Image from "next/image";
import { Whatsappblocks } from "./common/Helper";
import Link from "next/link";

function SmallCountentBox() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="position-relative">
      <Header />
      <div className="bg-white" id="overflowTest">
        <div
          className="smal_tab_box bottom_border_full border-bottom "
          id="new_chat"
        >
          <div className="d-flex align-items-center pb-2">
            <div className=" position-relative w-100">
              <input
                type="text"
                placeholder="Search or start new chat"
                className="border-0 bg_gray w-100"
              />
              <Image
                src="/assets/image/svg/search_icon.svg"
                width={24}
                height={24}
                alt="NavLogo"
                className="position-absolute searc_icon_one"
              />
            </div>
            <Link href="/" className="ps-2">
              <Image
                src="/assets/image/svg/toggle_icon.svg"
                width={20}
                height={20}
                alt="NavLogo"
              />
            </Link>
          </div>
        </div>
        <div className="download_app_box download_box_abs cursor_pointer">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="whatsapp_box d-flex align-items-center justify-content-center">
                <Image
                  src="/assets/image/svg/logos_whatsapp-icon.svg"
                  width={18}
                  height={18}
                  alt="whatsappLogo"
                />
              </div>
              <p className="mb-0 me-2 fw-normal color_dark_green font-base02 ">Get WhatsApp for Windows</p>
              <Image width={10} height={13} src="/assets/image/svg/green_right_arrow.svg" alt="Right arrow" />
            </div>
            <span className="me-3">
            <Image src="/assets/image/svg/Search_bar_menu.svg" width={24} height={24} alt="/" className='cross' />
          </span>
          </div>
        </div>

        <div>
          {Whatsappblocks.map((obj, index ,i) => (
            <div
              key={i}  className={`transition chats_box  d-flex d-flex justify-content-center align-items-center  cursor_pointer ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <div>
                <Image
                  src={obj.profiles}
                  width={49}
                  height={49}
                  alt="profiles"
                  className="profiles me_13px"
                />
              </div>
              <div className="w-100  position-relative chats_box_line">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="font-base-02 color_lite_black fw-medium mb_2 ellipsis-text">
                    {obj.holdername}
                  </h1>
                  <p className="font-sm color_gray mb-0 font_12"> {obj.time}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center  ">
                  <h2 className="d-flex align-items-center gap-1 font_14 channel_pera_two fw-normal mb-0 ">
                    {" "}
                    {obj.title}
                    {obj.titleicons ? (
                      <Image
                        src={obj.titleicons}
                        className="font_14"
                        width={18}
                        height={18}
                        alt="icons"
                      />
                    ) : null}
                    <span className="fw-normal font_14 ellipsis_text_one pt-1">
                      {" "}
                      {obj.textmsg}{" "}
                    </span>
                  </h2>
                  <div className="d-flex align-items-center">
                  {obj.unreadnotification ? (
                    <p className="font-sm green_notification fw_semibold text-white mb-0 font_12">
                      {obj.unreadnotification}
                    </p>
                  ) : null}
                    <Image className="down_arrow ms-1" src="/assets/image/svg/down_arrow.svg" alt="down_arrow" height={20} width={20}/>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SmallCountentBox;
