import { Col, Container, Image, Row } from 'react-bootstrap';
import styles from './about-us.module.css';

/* eslint-disable-next-line */
export interface AboutUsProps {}

export function AboutUs(props: AboutUsProps) {
  return (
    <Container style={ { height: '90vh' }}>
      <Row>
        <Col md={4}>
          <Image src="" alt="dev Profile Photo" roundedCircle />
        </Col>
        <Col md={8}>
          <h1>Ivan Varvarchuk</h1>
          <p>Hi, I'm John! I am a full-stack developer with experience in Typescript, React, and C#. </p>
          <h2>Skills</h2>
          <ul>
            <li>ASP.Net Core</li>
            <li>Typescript</li>
            <li>React</li>
          </ul>
          <h2>Experience</h2>
          <ul>
            <li>2018 - Current: Lviv Polytechnic National University Student</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
