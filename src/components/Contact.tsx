import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface ContactProps {
  onCloseContact: () => void;
}

const Contact = ({ onCloseContact }: ContactProps) => {
  useEffect(() => {
    handleShow();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    onCloseContact();
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          illum obcaecati odit cupiditate! Quo delectus enim adipisci libero in
          alias accusamus quos architecto dolorum, quas nostrum tempora
          quibusdam perspiciatis pariatur eligendi quasi. Distinctio eaque
          beatae obcaecati aperiam quae voluptatum dolorem laboriosam
          repellendus placeat accusantium libero voluptas modi fugit officiis
          possimus soluta nulla quia pariatur, mollitia adipisci saepe deserunt
          quisquam quod. Delectus, enim tempora! Iste labore, asperiores qui
          optio laborum soluta autem, aut eos unde in maiores est sequi cumque
          suscipit incidunt tempora odio officiis facilis architecto. Suscipit a
          cum perferendis ad ipsum architecto doloremque? Consequuntur rerum
          perspiciatis quo atque eaque ipsa vitae omnis officia dolor veniam.
          Unde eum corporis nobis incidunt exercitationem vel ipsum saepe quod.
          Cupiditate molestias tempore in alias distinctio, quasi praesentium
          voluptas illo ipsam excepturi vitae nostrum eos provident omnis,
          eligendi nesciunt vel ducimus expedita autem architecto. Consequuntur
          dolorem voluptatum assumenda doloremque voluptates vel quod quam
          voluptate incidunt. Saepe, mollitia itaque alias optio minima nobis
          similique. Veritatis, ex rem at, reprehenderit soluta cum a
          accusantium cumque voluptate consequuntur, repellat debitis atque
          ratione! Esse eligendi debitis maiores. Architecto ullam veniam, totam
          unde, laboriosam nisi non a rerum ad earum aliquam nesciunt ipsam
          quis. Veniam eos est perspiciatis ad ea. Soluta velit, suscipit aut
          omnis quam corrupti eius ab pariatur dolor laudantium non dolorem
          commodi repudiandae, adipisci delectus accusamus assumenda voluptates,
          magnam perferendis repellat labore beatae! Sequi corrupti magni
          obcaecati, quibusdam ullam, ab id magnam illo totam alias et
          temporibus impedit. Culpa vitae ducimus, officia temporibus nisi
          libero suscipit harum soluta accusamus ullam distinctio quidem.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;
