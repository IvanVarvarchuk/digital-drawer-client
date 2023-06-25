import styles from './profile.module.css';
import { useState } from 'react';
import { Form, Button, Container, Row, Col, Accordion } from 'react-bootstrap';
import useAuth from '../../hooks/use-auth/use-auth';
import ApiKeyAccordion from '../../components/api-key-accordion/api-key-accordion';
import {
  Client,
  profilePATCHMutationKey,
  useProfilePATCHMutation,
} from '../../../api/axios-client/Query';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
  IUpdateProfileInfoCommand,
  UpdateProfileInfoCommand,
} from '../../../api/axios-client';
import { useForm } from 'react-hook-form';
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export function Profile() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const updateProfileMutation = useProfilePATCHMutation({
    onSuccess: () =>
      queryClient.invalidateQueries([...profilePATCHMutationKey()]),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IUpdateProfileInfoCommand>();
  const updateProfile = async (command: IUpdateProfileInfoCommand) => {
    await updateProfileMutation.mutateAsync(
      new UpdateProfileInfoCommand(command)
    );
  };

  return (
    <Container className="d-flex flex-column gap-3">
      <h4>Manage Account</h4>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Edit Profile</Accordion.Header>
          <Accordion.Body className="gap-3">
            <Form onSubmit={handleSubmit(updateProfile)}>
              <Row className="mb-3">
                <Form.Label column sm="2">
                  New email:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="email"
                    {...register('newEmail', {
                      required: false,
                      pattern: emailRegex,
                    })}
                  />
                  <p>{errors.newEmail?.message}</p>
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Label column sm="2">
                  Current Password:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    {...register('currentPassword', {
                      required: false,
                      minLength: 10,
                      maxLength: 25,
                    })}
                    />
                    <p>{errors.currentPassword?.message}</p>
                  <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </Form.Text>
                </Col>
              </Row>

              <Row className="mb-3">
                <Form.Label column sm="2">
                  New Password:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="password"
                    {...register('newPassword', {
                      required: true,
                      minLength: 10,
                      maxLength: 25,
                    })}
                    />
                    <p>{errors.newPassword?.message}</p>
                  <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </Form.Text>
                </Col>
              </Row>

              <Button type="submit">Save Changes</Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <ApiKeyAccordion />
    </Container>
  );
}

export default Profile;
