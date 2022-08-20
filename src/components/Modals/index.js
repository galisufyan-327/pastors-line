import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import { Form, InputGroup } from "react-bootstrap";

function ModalBox({
  size = "lg",
  onHide,
  title,
  children,
  hideActions,
  showInputAction,
  hideHeader,
  classes,
  headerClasses,
  ...props
}) {
  return (
    <Modal
      {...props}
      size={size}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={headerClasses} closeButton>
        {!hideHeader && (
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body className={classes}>{children}</Modal.Body>
      {!hideActions && (
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      )}
      {showInputAction && (
        <Modal.Footer>
          <InputGroup>
            <Form.Check
              type="checkbox"
              id="default-check-box"
              label="Only even"
            />
          </InputGroup>
        </Modal.Footer>
      )}
    </Modal>
  );
}

ModalBox.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  hideActions: PropTypes.bool,
  hideHeader: PropTypes.bool,
  onHide: PropTypes.func,
  size: PropTypes.string,
  classes: PropTypes.string,
  headerClasses: PropTypes.string,
  showInputAction: PropTypes.bool
};

export default ModalBox;
