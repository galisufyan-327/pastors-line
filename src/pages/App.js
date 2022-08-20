import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import ContactDetail from "../components/contacts/ContactDetail";
import ModalA from "../components/Custom-modals/ModalA";
import ModalB from "../components/Custom-modals/ModalB";
import ModalBox from "../components/Modals";
import { Routes } from "../constants/Route";

function App() {
  const [showModal, setModal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalBShow, setModalBShow] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes(Routes.ALL_CONTACTS)) {
      setModalShow(true);
    } else if (location.pathname.includes(Routes.US_CONTACTS)) {
      setModalBShow(true);
    }
  }, []);

  const handleSwitching = (type) => {
    switch (type) {
      case "modal-a":
        setModalBShow(false);
        setModalShow(true);
        navigate(Routes.ALL_CONTACTS);
        return;
      case "modal-b":
        setModalShow(false);
        setModalBShow(true);
        navigate(Routes.US_CONTACTS);
        return;
      default:
        return;
    }
  };

  const showDetailsModal = (contact) => {
    setSelectedContact(contact);
    setModal(true);
  };

  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Button className="btn-a" onClick={() => handleSwitching('modal-a')}>
            Button A
          </Button>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Button className="btn-b" onClick={() => handleSwitching('modal-b')}>
            Button B
          </Button>
        </Col>
      </Row>

      <ModalA
        title={"All Contacts"}
        backdrop="dynamic"
        show={modalShow}
        showInputAction
        classes="height-400"
        onHide={() => setModalShow(false)}
        setSelectedContact={(event) => showDetailsModal(event)}
        switchCustomModal={() => handleSwitching('modal-b')}
      />

      <ModalB
        title="US Contacts"
        backdrop="dynamic"
        classes="height-400"
        showInputAction
        show={modalBShow}
        onHide={() => setModalBShow(false)}
        setSelectedContact={(event) => showDetailsModal(event)}
        switchCustomModal={() => handleSwitching('modal-a')}
      />

      <ModalBox
        title="Contact Details"
        show={showModal}
        classes="modal-90w"
        headerClasses="border-none"
        hideActions
        backdrop="static"
        onHide={() => setModal(false)}
      >
        <ContactDetail contact={selectedContact} />
      </ModalBox>
    </>
  );
}

export default App;
