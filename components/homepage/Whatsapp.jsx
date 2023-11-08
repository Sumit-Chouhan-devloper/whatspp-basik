import React from "react";
import SmallCountentBox from "../SmallCountentBox";
import DesktopChat from "../DesktopChat";

function Whatsapp() {
  return (
    <div className="custom_container m-auto overflow-hidden vh-100">
      <div className="p-xl-3 pb-xl-0 position-relative whatsapp_parent_012">
        <div className="d-flex position-relative whatsapp_chatbox_001 mx-auto">
          <div className="whatsapp-chat-list">
            <SmallCountentBox />
          </div>
          <div className="w-100 display_show bg_chat_box">
            <DesktopChat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatsapp;
