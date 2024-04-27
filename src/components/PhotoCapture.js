import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Modal } from "react-bootstrap";

const videoConstraints = {
  width: 1200,
  height: 720,
  facingMode: "user",
};

const PhotoCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);

  useEffect(() => {
    handleShow();

    const captureAfterDelay = setTimeout(() => {
      const image = webcamRef.current.getScreenshot();
      onCapture(image);
      handleClose();
    }, 4000);

    return () => clearTimeout(captureAfterDelay);
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        // style={{ width: "auto" }}
        centered
      >
        <Modal.Body
          style={{ maxHeight: "90vh", width: "auto", maxWidth: "90vw" }}
        >
          {show && (
            <Webcam
              style={{
                transform: "scaleX(-1)",
                maxHeight: "80vh",
              }}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PhotoCapture;
