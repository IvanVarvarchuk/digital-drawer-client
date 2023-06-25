import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faDownload, faTrash } from '@fortawesome/free-solid-svg-icons';
import useConvertionHistoryState from '../../state/use-convertion-history-state/use-convertion-history-state';
import ConfirmModal from '../../../../components/confirm-modal/confirm-modal';
import useModal from '../../../../hooks/use-modal/use-modal';
import styles from './action-buttons.module.css';

/* eslint-disable-next-line */
export interface ActionButtonsProps {
  id: string;
}

export function ActionButtons({id}: ActionButtonsProps) {
  const { dispatch } = useConvertionHistoryState();
  const handleDownload = (id: string) => {
    dispatch({ type: 'DOWNLOAD_FILE', payload: id });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'SOFT_DELETE_FILE', payload: id });
  };

  const { isModalVisible, hideModal, showModal } = useModal();
  return (
    <div className={styles.actionGroup}>
      <Button variant="danger" onClick={showModal}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <ConfirmModal
        showModal={isModalVisible}
        title={'Confirm file deletion'}
        action={'delete file'}
        handleConfirm={() => handleDelete(id)}
        handleClose={hideModal} />
      <Button variant="primary" onClick={() => handleDownload(id)}>
        <FontAwesomeIcon icon={faDownload} />
      </Button>
    </div>
  );
};

export function DeleteActionButtons({id}: ActionButtonsProps) {
  const { dispatch } = useConvertionHistoryState();
  const handleCancelDelete = (id: string) => {
    dispatch({ type: 'CANCEL_DELETE_FILE', payload: id });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: 'DELETE_FILE', payload: id });
  };

  const { isModalVisible, hideModal, showModal } = useModal();
  return (
    <div className={styles.actionGroup}>
      <Button variant="danger" onClick={showModal}>
        <FontAwesomeIcon icon={faTrash} />
      </Button>
      <ConfirmModal
        showModal={isModalVisible}
        title={'Confirm file deletion'}
        action={'delete file'}
        description={'This action is irreversible!'}
        handleConfirm={() => handleDelete(id)}
        handleClose={hideModal} />
      <Button variant="primary" onClick={() => handleCancelDelete(id)}>
        <FontAwesomeIcon icon={faCancel} />
      </Button>
    </div>
  );
};

export default ActionButtons;