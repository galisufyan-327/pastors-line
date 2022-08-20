import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

function ContactDetail(props) {
  const { contact } = props;

  return (
    <div className="align-content-center contact-detail">
      <ListGroup>
        <ListGroup.Item variant="dark">ID</ListGroup.Item>
        <ListGroup.Item variant="light">{contact.id}</ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item variant="dark">First Name:</ListGroup.Item>
        <ListGroup.Item variant="light">{contact.first_name || "-"}</ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item variant="dark">Last Name:</ListGroup.Item>
        <ListGroup.Item variant="light">{contact.last_name || "-"}</ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item variant="dark">Email: </ListGroup.Item>
        <ListGroup.Item variant="light">{contact.email || "-"}</ListGroup.Item>
      </ListGroup>

      <ListGroup>
        <ListGroup.Item variant="dark">Phone: </ListGroup.Item>
        <ListGroup.Item variant="light">{contact.phone_number || "-"}</ListGroup.Item>
      </ListGroup>

    </div>
  );
}

ContactDetail.propTypes = {
  contact: PropTypes.object,
};

export default ContactDetail;
