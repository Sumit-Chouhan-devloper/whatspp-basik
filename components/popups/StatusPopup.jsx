import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import Link from "next/link";
const StatusPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="status_size">
      <div className="pt-5 bg_dark_green">
        <div className="py-5 ps-5 d-flex gap-5">
          <Link href="/">
            <Image src="/assets/image/svg/white_left_errow.svg" height={25} width={25} />
          </Link>
          <h2 className=" font-lg text-white">Status</h2>
        </div>
      </div>
      <div className="bg-white">
        <div className="bg-white ps-3 pt-4 d-flex align-items-center gap-3">
          <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
          <div>
            <h2 className="text-black  mb-1 font-base mb-0">
              My Status
            </h2>
            <p className="fw-medium color_gray font_13 mb-0">
              Add to my status
            </p>
          </div>
        </div>
        <div className="bg-white mt-4">
          <h2 className="font-base mb-4 ps-5 RECENT">RECENT</h2>
          <div className="d-flex justify-content-end pe-3">
            <div className="status_line"></div>
          </div>
          <Button className="bg-transparent border-0 w-100 status_hover ps-3  rounded-0" variant="primary" onClick={handleShow}>
            <div className="d-flex align-items-center gap-3">
              <div className="status_circle d-flex justify-content-center align-items-center">
                <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
              </div>
              <div className="text-start">
                <h2 className="text-black  mb-1 font-base mb-0">
                  Gideon Nic
                </h2>
                <p className="fw-medium color_gray font_13 mb-0">
                  today at 10:54 am
                </p>
              </div>
            </div>
          </Button>

          <Modal className="status_modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton className="text-white">
              <Modal.Title>
                <div className="d-flex align-items-center gap-3">
                  <div className="status_circle d-flex justify-content-center align-items-center">
                    <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
                  </div>
                  <div className="text-start">
                    <h2 className="text-black  mb-1 font-base mb-0">
                      Gideon Nic
                    </h2>
                    <p className="fw-medium color_gray font_13 mb-0">
                      today at 10:54 am
                    </p>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="w-100 h-100 video_full">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CV2kZPLsOVw?si=cpITEmK_xcdzPHqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>

          </Modal>
          <div className="d-flex justify-content-end pe-3">
            <div className="status_line"></div>
          </div>
          <Button className="bg-transparent border-0 w-100 status_hover ps-3  rounded-0" variant="primary" onClick={handleShow}>
            <div className="d-flex align-items-center gap-3">
              <div className="status_circle d-flex justify-content-center align-items-center">
                <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
              </div>
              <div className="text-start">
                <h2 className="text-black  mb-1 font-base mb-0">
                  Gideon Nic
                </h2>
                <p className="fw-medium color_gray font_13 mb-0">
                  today at 10:54 am
                </p>
              </div>
            </div>
          </Button>

          <Modal className="status_modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton className="text-white">
              <Modal.Title>
                <div className="d-flex align-items-center gap-3">
                  <div className="status_circle d-flex justify-content-center align-items-center">
                    <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
                  </div>
                  <div className="text-start">
                    <h2 className="text-black  mb-1 font-base mb-0">
                      Gideon Nic
                    </h2>
                    <p className="fw-medium color_gray font_13 mb-0">
                      today at 10:54 am
                    </p>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="w-100 h-100 video_full">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CV2kZPLsOVw?si=cpITEmK_xcdzPHqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>

          </Modal>
          <div className="d-flex justify-content-end pe-3">
            <div className="status_line"></div>
          </div>
          <Button className="bg-transparent border-0 w-100 status_hover ps-3  rounded-0" variant="primary" onClick={handleShow}>
            <div className="d-flex align-items-center gap-3">
              <div className="status_circle d-flex justify-content-center align-items-center">
                <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
              </div>
              <div className="text-start">
                <h2 className="text-black  mb-1 font-base mb-0">
                  Gideon Nic
                </h2>
                <p className="fw-medium color_gray font_13 mb-0">
                  today at 10:54 am
                </p>
              </div>
            </div>
          </Button>

          <Modal className="status_modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton className="text-white">
              <Modal.Title>
                <div className="d-flex align-items-center gap-3">
                  <div className="status_circle d-flex justify-content-center align-items-center">
                    <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
                  </div>
                  <div className="text-start">
                    <h2 className="text-black  mb-1 font-base mb-0">
                      Gideon Nic
                    </h2>
                    <p className="fw-medium color_gray font_13 mb-0">
                      today at 10:54 am
                    </p>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="w-100 h-100 video_full">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CV2kZPLsOVw?si=cpITEmK_xcdzPHqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>

          </Modal>

          <h2 className="font-base my-4 ps-5 RECENT">VIEWED</h2>
          <div className="d-flex justify-content-end pe-3">
            <div className="status_line"></div>
          </div>
          <Button className="bg-transparent border-0 w-100 status_hover ps-3  rounded-0" variant="primary" onClick={handleShow}>
            <div className="d-flex align-items-center gap-3">
              <div className="viewed_status_circle d-flex justify-content-center align-items-center">
                <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
              </div>
              <div className="text-start">
                <h2 className="text-black  mb-1 font-base mb-0">
                  Gideon Nic
                </h2>
                <p className="fw-medium color_gray font_13 mb-0">
                  today at 10:54 am
                </p>
              </div>
            </div>
          </Button>

          <Modal className="status_modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton className="text-white">
              <Modal.Title>
                <div className="d-flex align-items-center gap-3">
                  <div className="viewed_status_circle d-flex justify-content-center align-items-center">
                    <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
                  </div>
                  <div className="text-start">
                    <h2 className="text-black  mb-1 font-base mb-0">
                      Gideon Nic
                    </h2>
                    <p className="fw-medium color_gray font_13 mb-0">
                      today at 10:54 am
                    </p>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="w-100 h-100 video_full">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CV2kZPLsOVw?si=cpITEmK_xcdzPHqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>

          </Modal>
          <div className="d-flex justify-content-end pe-3">
            <div className="status_line"></div>
          </div>
          <Button className="bg-transparent border-0 w-100 status_hover ps-3  rounded-0" variant="primary" onClick={handleShow}>
            <div className="d-flex align-items-center gap-3">
              <div className="viewed_status_circle d-flex justify-content-center align-items-center">
                <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
              </div>
              <div className="text-start">
                <h2 className="text-black  mb-1 font-base mb-0">
                  Gideon Nic
                </h2>
                <p className="fw-medium color_gray font_13 mb-0">
                  today at 10:54 am
                </p>
              </div>
            </div>
          </Button>

          <Modal className="status_modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton className="text-white width_500">
              <Modal.Title>
                <div className="d-flex align-items-center gap-3">
                  <div className="status_circle d-flex justify-content-center align-items-center">
                    <Image src="/assets/image/svg/nav_boy_icon.svg" height={40} width={40} />
                  </div>
                  <div className="text-start">
                    <h2 className="text-black  mb-1 font-base mb-0">
                      Gideon Nic
                    </h2>
                    <p className="fw-medium color_gray font_13 mb-0">
                      today at 10:54 am
                    </p>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="w-100 h-100 video_full">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CV2kZPLsOVw?si=cpITEmK_xcdzPHqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Modal.Body>

          </Modal>
        </div>
        <div className="d-flex align-items-center gap-1 ps-5 mt-5">
        <Image src="/assets/lock.svg" height={13} width={13} />
        <p className=" font-base mb-0 color_gray">
          Your status updates are{" "}
          <a className=" text-decoration-none" href="#">
            end-to-end-encrypted
          </a>
        </p>
      </div>
      </div>
    </div>
  );
};

export default StatusPopup;