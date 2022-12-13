import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewContactModal = ({ closeModal }) => {
  const idRef = useRef();
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    closeModal();
    console.log("submitted");
  }
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required></Form.Control>
          </Form.Group>
          <Button type="submit" style={{ margin: "10px 0" }}>
            Create {/* PAUSED ON 36'09" */}
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewContactModal;
