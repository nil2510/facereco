import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

interface ResponseProps {
  response: string;
  responseName: string;
  onCloseResponse: () => void;
}

const ResponseModel = ({
  response,
  responseName,
  onCloseResponse,
}: ResponseProps) => {
  useEffect(() => {
    setResponse(response);
    if (responseName != "unknown" || response == "User registered successfully") {
      setResponsePositive(true);
    }
    setResponseName(responseName);
    handleShow();
    const captureAfterDelay = setTimeout(() => {
      handleClose();
      onCloseResponse();
    }, 4000);
    return () => clearTimeout(captureAfterDelay);
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Response, setResponse] = useState("");
  const [ResponsePositive, setResponsePositive] = useState(false);
  const [ResponseName, setResponseName] = useState("");

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          {ResponsePositive ? <TiTick /> : <ImCross />}
          <br />
          {Response}
          <br />
          {ResponsePositive && `Thank You ${ResponseName}`}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResponseModel;
