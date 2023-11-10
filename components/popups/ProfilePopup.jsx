import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProfilePopup() {
  return (
    <>
      <div className=" pb-sm-5 me-auto ff_inter text-center bg_gray">
      <div className="Communities_box bg_dark_green me-auto ps-4  pb-1 pt-5 text-start">
          <h2 className=' font_19 text-white fw_medium mb-0 mt-3'>
            <Link href="/" className='me-3 pt-4 me-md-4 pe-md-2 '>
              <Image src="/assets/image/svg/white_left_errow.svg" height={24} width={24} alt="Errow" />
            </Link>
            Profile
          </h2>
        </div>
        <div className="communitie_parent bg-white min-vh-100">
          <div className="py-4 ">
            <Image
              width={200}
              height={200}
              src="/assets/image/png/profilepopup.png"
              alt="Profile"
              className="py-lg-1 Profile_popup"
            />
          </div>
          <div className="profile_contact text-start bg-white ">
            <h3 className="profile_parent mx-auto color_light_green fw-light fs_mmd opacity-75 mb-sm-0">
              Your name
            </h3>
            <div className="profile_parent mx-auto d-flex justify-content-between align-items-center">
              <p className="color_dark_black fw-normal fs_ragular  pt-3 mb-0">
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
          <p className="profile_parent  profile_para text-start font_14 fs_mmd_sm color_dark_black opacity_70 pt-3  mb-0">
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </p>
          <div className="profile_contact text-start bg-white mb-sm-0 mb-3">
            <h3 className="profile_parent mx-auto color_light_green fw-light fs_mmd opacity-75 mb-sm-0">
              About
            </h3>
            <div className="profile_parent mx-auto d-flex justify-content-between align-items-center">
              <p className="color_dark_black fw-normal fs_ragular  pt-3 mb-0">
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
