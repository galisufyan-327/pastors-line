import React from "react";
import { Button } from "react-bootstrap";
import ModalBox from "../Modals";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ContactList from "../contacts/ContactList";
import { mockData } from "../../constants";

function ModalA(props) {
  const { setSelectedContact, onHide, switchCustomModal, ...remainingProps } =
    props;
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/");
    onHide(true);
  };

  const fetchMoreData = (event) => {
    console.log(event);
    return []
  }

  return (
    <>
      <ModalBox hideActions onHide={closeModal} {...remainingProps}>
        <Button
          variant="primary"
          className="btn-a"
          disabled={true}
          onClick={() => switchCustomModal()}
        >
          All Contacts
        </Button>
        <Button
          variant="primary"
          className="btn-b"
          onClick={() => switchCustomModal()}
        >
          US Contacts
        </Button>
        <Button variant="primary" className="btn-c" onClick={closeModal}>
          Close
        </Button>
        <ContactList
          items={mockData}
          setSelectedContact={setSelectedContact}
          fetchMoreData={() => fetchMoreData()}
        />
      </ModalBox>
    </>
  );
}

ModalA.propTypes = {
  title: PropTypes.string,
  onHide: PropTypes.func,
  switchCustomModal: PropTypes.func,
  setSelectedContact: PropTypes.func,
};

export default ModalA;
