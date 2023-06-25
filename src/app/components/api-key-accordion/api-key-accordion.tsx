import React, { useState } from 'react';
import {
  Accordion,
  Card,
  Button,
  Modal,
  InputGroup,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import * as Types from '../../../api/axios-client';
import styles from './api-key-accordion.module.css';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';
import useModal, { UseModal } from '../../hooks/use-modal/use-modal';
import ConfirmModal from '../confirm-modal/confirm-modal';
import {
  apiKeyAllQueryKey,
  useApiKeyAllQuery,
  useApiKeyDELETEMutation,
  useApiKeyPOSTMutation,
} from '../../../api/axios-client/Query';
import { useForm } from 'react-hook-form';
import { CreateApiKeyCommand, ICreateApiKeyCommand } from '../../../api/axios-client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAuth from '../../hooks/use-auth/use-auth';

type GetApiKeyResponse = Types.ICreateApiKeyCommandDto;
/* eslint-disable-next-line */
export interface ApiKeyAccordionProps {
  apiKeys: GetApiKeyResponse[];
}

export type ModalProps = {
  isVisible: boolean;
  handleClose: () => void;
};

const CreateApikeyModal: React.FC<ModalProps> = ({
  isVisible,
  handleClose,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Types.ICreateApiKeyCommand>();
  const queryClient = useQueryClient();
  const createKeyMutation = useApiKeyPOSTMutation({
    onSuccess: () => queryClient.invalidateQueries({queryKey: [...apiKeyAllQueryKey()]})
  })
  const submit = (values: Types.ICreateApiKeyCommand) => {
    createKeyMutation.mutate(new CreateApiKeyCommand(values));
  }
  return (
    <Modal
      show={isVisible}
      centered
      className={styles.autFormContainer}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit API key</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
          <p>{errors.name?.message}</p>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-succes">
              Submit
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

type EditModalProps = ModalProps & { name: string };
const EditApikeyModal: React.FC<EditModalProps> = ({
  isVisible,
  handleClose,
  name,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Types.ICreateApiKeyCommand>();
  return (
    <Modal
      show={isVisible}
      centered
      className={styles.autFormContainer}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit API key</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder={name}
            {...register('name', { required: true })}
          />
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-succes">
              Submit
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

const ApiKeyAccordion: React.FC = () => {
  const [selctedApiKey, setSelectedApiKey] = React.useState<GetApiKeyResponse>();
  const handleCopyKey = (key?: string | null) => {
    key && navigator.clipboard.writeText(key);
  };
  const { user } = useAuth();
  const { isModalVisible, hideModal, showModal } = useModal();
  const {
    isModalVisible: confirmModalVsisble,
    hideModal: hideConfirmModal,
    showModal: showConfirmModal,
  } = useModal();
  const {
    isModalVisible: editModalVsisble,
    hideModal: hideEditModal,
    showModal: showEditModal,
  } = useModal();

  function hideKey(input: string): string {
    const firstFourChars = input.slice(0, 4);
    const remainingChars = input.slice(4);
    const replacedChars = remainingChars.replace(/./g, '*');

    return firstFourChars + replacedChars;
  }
  const queryClient = useQueryClient();
  const allKeys = useApiKeyAllQuery({ enabled: !!user });
  const revokeKeyMutation = useApiKeyDELETEMutation(selctedApiKey?.id ?? '', {
    onSuccess: () => queryClient.invalidateQueries({queryKey: [...apiKeyAllQueryKey()]})
  });
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>My api keys</Accordion.Header>
        <Accordion.Body className="gap-3">
          <div className={styles.scrollable}>
            {allKeys.data?.length === 0 && <p>You don't have API keys generated yet</p>}
            {allKeys.data?.map((apiKey, index) => (
              <Row key={index}>
                <Col>
                  <p>Name: {apiKey.name}</p>
                  <p>Value: {hideKey(apiKey?.key ?? '')}</p>
                </Col>
                <Col className={styles.apiKeyActions}>
                  <Button
                    variant="primary"
                    onClick={() => handleCopyKey(apiKey?.key)}
                  >
                    Copy Key
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setSelectedApiKey(apiKey);
                      showConfirmModal();
                    }}
                  >
                    Rvoke Key
                  </Button>
                  {/* <Button
                    variant="primary"
                    onClick={() => {
                      setSelectedApiKey(apiKey);
                    }}
                  >
                    Edit Key
                  </Button> */}
                </Col>
              <hr/>
              </Row>
            ))}
          </div>
          <Button className='my-4' variant="success" onClick={showModal}>
            Create Key
          </Button>
        </Accordion.Body>
      </Accordion.Item>
      <CreateApikeyModal isVisible={isModalVisible} handleClose={hideModal} />
      <ConfirmModal
        showModal={confirmModalVsisble}
        title={'Revoke API key'}
        action={'revoke this API key'}
        handleConfirm={() => {
          selctedApiKey && revokeKeyMutation.mutate();
        }}
        handleClose={hideConfirmModal}
      />
    </Accordion>
  );
};

export default ApiKeyAccordion;
