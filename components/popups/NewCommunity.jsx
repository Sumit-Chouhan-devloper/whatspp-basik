import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewCommunity = () => {
  return (
    <>
      <div className=" overflow-x-hidden ">
        <div className="Communities_box bg_dark_green me-auto ps-4 gap-3 pt-5 text-start d-flex px-3">
          <Link href="/"><Image
            src="/assets/image/svg/white_left_errow.svg"
            height={24}
            width={24}
            alt="Errow"
            className="mt-3"
          />
          </Link>
          <h2 className="font_19 text-white fw_medium mb-0 mt-3 ">
            New community
          </h2>
        </div>
        <div className="communitie_parent min-vh-100 bg-white pt-5">
          <div className=" d-flex justify-content-center">
            <Image
              src="/assets/image/svg/community.svg"
              height={226}
              width={340}
              alt="Errow"
              className="mt-5"
            />
          </div>
          <h4 className=" ff_inter text-center fw-semibold font-xl text-black mt-5 ">
            Create a new community
          </h4>
          <div className="d-flex justify-content-center">
            <p className=" font-base fw-normal ff_inter text-center color_gray max_w_400 mt-3">
              Bring together a neighborhood, school or more. create topic-based
              groups for members,and easily send them admin announcements.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p className=" font-base fw-normal ff_inter text-center color_light_green max_w_400 mt-3 mb-5">
              See example communities &gt;
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Image
              src="/assets/image/svg/arrow-right.svg"
              height={60}
              width={60}
              alt="Errow"
              className="mt-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCommunity;
