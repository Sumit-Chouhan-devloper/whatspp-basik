import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProfilePopup() {
  return (
    <>
      <div className=" pb-sm-5 mx-auto ff_inter text-center bg_gray">
        <div className="bg_dark_green">
          <div className="profile_parent mx-auto  pb-1 pt-4 pt-md-5 text-start">
            <h2 className="font-lg text-white fw_medium ps-3 ps-sm-0 pb-4 mt-md-5 pt-3 d-flex align-items-center">
              <Link href="#" className="me-3 me-md-4 pe-md-2">
                <Image
                  src="/assets/image/svg/white_left_errow.svg"
                  height={35}
                  width={35}
                  alt="Errow"
                />
              </Link>
              Profile
            </h2>
          </div>
        </div>
        <div className="">
          <div className="py-5 my-md-2">
            <Image
              width={368}
              height={368}
              src="/assets/image/png/profilepopup.png"
              alt="Profile"
              className="py-lg-1 Profile_popup"
            />
          </div>
          <div className="profile_contact text-start bg-white ">
            <h3 className="profile_parent mx-auto color_light_green fw-normal fs_mmd opacity-75 mb-sm-0">
              Your name
            </h3>
            <div className="profile_parent mx-auto d-flex justify-content-between align-items-center">
              <p className="color_dark_black fw-normal fs_mmd mt-md-4 pt-2 mb-0">
                Rejoice Benson(You)
              </p>
              <Link href="/" className="pt-2">
                <Image
                  className="mt-md-4 mb-0"
                  src="/assets/image/svg/edit_pencil.svg"
                  height={28}
                  width={28}
                  alt="Pencil"
                />
              </Link>
            </div>
          </div>
          <p className="profile_parent mx-auto px-sm-0 profile_para text-start fs_mmd fs_mmd_sm color_dark_black opacity_70 mb-0">
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </p>
          <div className="profile_contact text-start bg-white mb-sm-0 mb-3">
            <h3 className="profile_parent mx-auto color_light_green fw-normal fs_mmd opacity-75 mb-sm-0">
              About
            </h3>
            <div className="profile_parent mx-auto d-flex justify-content-between align-items-center">
              <p className="color_dark_black fw-normal fs_mmd mt-md-4 pt-2 mb-0">
                Hello
              </p>
              <Link href="/" className="pt-2">
                <Image
                  className="mt-md-4 mb-0"
                  src="/assets/image/svg/edit_pencil.svg"
                  height={28}
                  width={28}
                  alt="Pencil"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePopup;
