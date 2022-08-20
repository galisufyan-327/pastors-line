import React from "react";
import ModalBox from "../Modals";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ContactList from "../contacts/ContactList";
import { mockData } from "../../constants";

function ModalB(props) {
  const { setSelectedContact, onHide, switchCustomModal, ...remainingProps } =
    props;
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
    onHide(true);
  };

  return (
    <ModalBox hideActions onHide={closeModal} {...remainingProps}>
      <Button
        variant="primary"
        className="btn-a"
        onClick={() => switchCustomModal()}
      >
        All Contacts
      </Button>
      <Button
        variant="primary"
        disabled={true}
        className="btn-b"
        onClick={() => switchCustomModal()}
      >
        US Contacts
      </Button>
      <Button variant="primary" className="btn-c" onClick={closeModal}>
        Close
      </Button>
        <ContactList items={mockData} setSelectedContact={setSelectedContact} />
    </ModalBox>
  );
}

ModalB.propTypes = {
  title: PropTypes.string,
  onHide: PropTypes.func,
  switchCustomModal: PropTypes.func,
  setSelectedContact: PropTypes.func,
};

export default ModalB;
