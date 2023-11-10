import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
const StatusPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="status_size">
      <div className="pt-5 bg_dark_green">
        <div className="py-5 ps-5 d-flex gap-5">
          <Image src="/assets/arrow.svg" height={25} width={25} />
          <h2 className="fw-semibold font-lg text-white">Status</h2>
        </div>
      </div>
      <div className="bg-white ps-3 pt-5 d-flex align-items-center gap-3">
        <Image src="/assets/profile_pic.svg" height={52} width={52} />
        <div>
          <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
            My Status
          </h2>
          <p className="fw-medium color_gray font-base mb-0">
            Add to my status
          </p>
        </div>
      </div>
      <div className="bg-white mt-5">
        <h2 className="font-lg mb-4 ps-5">RECENT</h2>
        <div className="d-flex justify-content-end pe-3">
          <div className="status_line"></div>
        </div>
        <Button className ="bg-transparent border-0 w-100 status_hover ps-3 py-3 rounded-0" variant="primary" onClick={handleShow}>
        <div className="d-flex align-items-center gap-3">
          <div className="status_circle d-flex justify-content-center align-items-center">
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
        <Button className ="bg-transparent border-0 w-100 status_hover ps-3 py-3 rounded-0" variant="primary" onClick={handleShow}>
        <div className="d-flex align-items-center gap-3">
          <div className="status_circle d-flex justify-content-center align-items-center">
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
        <Button className ="bg-transparent border-0 w-100 status_hover ps-3 py-3 rounded-0" variant="primary" onClick={handleShow}>
        <div className="d-flex align-items-center gap-3">
          <div className="status_circle d-flex justify-content-center align-items-center">
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
        
        <h2 className="font-lg my-5 ps-5">VIEWED</h2>
        <div className="d-flex justify-content-end pe-3">
          <div className="status_line"></div>
        </div>
        <Button className ="bg-transparent border-0 w-100 status_hover ps-3 py-3 rounded-0" variant="primary" onClick={handleShow}>
        <div className="d-flex align-items-center gap-3">
          <div className="status_circle d-flex justify-content-center align-items-center">
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
        <Button className ="bg-transparent border-0 w-100 status_hover ps-3 py-3 rounded-0" variant="primary" onClick={handleShow}>
        <div className="d-flex align-items-center gap-3">
          <div className="status_circle d-flex justify-content-center align-items-center">
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
          <Image src="/assets/profile_pic.svg" height={52} width={52} />
          </div>
          <div className="text-start">
            <h2 className="text-black fw-semibold mb-1 font-lg mb-0">
              Gideon Nic
            </h2>
            <p className="fw-medium color_gray font-base mb-0">
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
  );
};

export default StatusPopup;