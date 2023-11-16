import React from "react";
import Image from "next/image";
import Link from "next/link";

function SpleshScreenPopup() {
  return (
    <div className="bg-white">
      <div className="row mx-0 text-center d-flex align-items-center vh-100 justify-content-center">
        <div className="col-11  col-md-8 m-auto ">
          <Link href="/" className="text-decoration-none mb-2 d-block">
            <Image
              src="/assets/image/svg/gray_splash_whatsapp_logo.svg"
              width={125}
              height={125}
              alt="logo"
              className="mb-4 mb-md-5 gray_splash_whatsapp_logo"
            />
          </Link>
          <span className="border-top w-100 d-block max_w_888 m-auto"></span>
          <h1 className="fw_medium color-black fs_llg mb-md-3 pt-3 pt-md-4 mt-xl-3">
            WhatsApp
          </h1>
          <p className="mb-0 justify-content-center color_dark_black fw-normal fs_ragular mb-0 d-flex align-items-center">
            <Image
              src="/assets/image/svg/gray_lock_icon.svg"
              width={13}
              height={13}
              alt="lock"
            />
            <span className=" ps-1"> End-to-end encrypted</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpleshScreenPopup;
