/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useCookie } from "react-use";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DemoCookie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, updateCookie, deleteCookie] = useCookie("demo-cookie");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (!value) {
      handleShow();
      updateCookie(`my-useCookie-${counter}`);
    }
  }, [value, updateCookie, deleteCookie, counter]);

  const updateCookieHandler = () => {
    setCounter((c) => c + 1);
    updateCookie(`my-useCookie-${counter}`);
  };

  const deleteCookieHandler = () => {
    deleteCookie();
  };

  // animation={false} - animacje nie działają, więc musi być false
  return (
    <div className="frame">
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="ModalHeader"
        animation={false}
      >
        <Modal.Header id="ModalHeader" closeButton>
          <Modal.Title>Cookies</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ogładając dalej stronę akceptujesz cookie!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>useCookie</h1>
      <p>{`Wartość 'demo-cookie': ${value}`}</p>
      <Button className="btn btn-primary" onClick={updateCookieHandler}>
        Update Cookie
      </Button>
      <Button className="btn btn-danger" onClick={deleteCookieHandler}>
        Delete Cookie
      </Button>
    </div>
  );
};

export default DemoCookie;
