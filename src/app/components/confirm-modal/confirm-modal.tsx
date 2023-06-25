import { Button, Modal, Row } from 'react-bootstrap';
import styles from './confirm-modal.module.css';
import React from 'react';

/* eslint-disable-next-line */
export interface ConfirmModalProps {
  showModal: boolean;
  title: React.ReactElement | string;
  action: string;
  description?: React.ReactElement | string;
  handleConfirm: () => Promise<void> | void;
  handleClose: () => void;
}

export function ConfirmModal({
  showModal,
  title,
  action,
  description,
  handleConfirm,
  handleClose,
}: ConfirmModalProps) {
  return (
    <Modal
      show={showModal}
      centered
      className={styles.autFormContainer}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {`Are you sure whant to ${action}?`}
        {description && <p>{description}</p> }
        <div className={styles.actionButtons}>
          <Button
            variant="warning"
            onClick={() => {
              handleConfirm();
              handleClose();
            }}
          >
            Yes
          </Button>
          <Button variant="" onClick={handleClose}>
            No
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ConfirmModal;
