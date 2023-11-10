import React from "react";
import Header from "./Header";
import Image from "next/image";
import { Whatsappblocks } from "./common/Helper";
import Link from "next/link";

function SmallCountentBox() {
  return (
    <>
      <Header />
      <div className="bg-white" id="overflowTest">
        <div className="smal_tab_box " id="new_chat">
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
        <div>
          {Whatsappblocks.map((obj, i) => (
            <div
              className="transition chats_box d-flex d-flex justify-content-center align-items-center border-bottom cursor_pointer "
              key={i}
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
              <div className="w-100  ">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="font-base-02 color_gray fw_semibold mb-0 ellipsis-text">
                    {obj.holdername}
                  </h1>
                  <p className="font-sm fw_semibold color_gray mb-0 font_11">
                    {" "}
                    {obj.time}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center  ">
                  <h2 className="d-flex align-items-center gap-1 font-sm color_gray fw_medium mb-0 ">
                    {" "}
                    {obj.title}
                    {obj.titleicons ? (
                      <Image
                        src={obj.titleicons}
                        width={18}
                        height={18}
                        alt="icons"
                      />
                    ) : null}
                    <span className="fw-normal ellipsis-text pt-1"> {obj.textmsg} </span>
                  </h2>
                  {obj.unreadnotification ? (
                    <p className="font-sm green_notification fw_semibold text-white mb-0 font_12" >
                      {obj.unreadnotification}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SmallCountentBox;
