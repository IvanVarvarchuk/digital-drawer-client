import styles from './profile.module.css';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function Profile() {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'Doe@testmail.com',

  }
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [apiKey, setApiKey] = useState('');

  const handleUpdateProfile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to update profile data
  };

  const handleGenerateApiKey = () => {
    // Logic to generate new API key
    setApiKey('abc123'); // Example key
  };

  return (
    <Container>
      <h1>Manage Account</h1>
      <Form onSubmit={handleUpdateProfile}>
        <Row className="mb-3">
          <Form.Label column sm="2">
            First Name:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm="2">
            Last Name:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </Col>
        </Row>

        <Button type="submit">Save Changes</Button>
      </Form>

      <div className="mt-3">
        <h2>API Key:</h2>
        {apiKey ? (
          <>
            <p>Your API key is: <span>{apiKey}</span></p>
            <Button variant="secondary" onClick={handleGenerateApiKey}>Generate New Key</Button>
          </>
        ) : (
          <Button onClick={handleGenerateApiKey}>Generate API Key</Button>
        )}
      </div>
    </Container>
  );
}

export default Profile;
