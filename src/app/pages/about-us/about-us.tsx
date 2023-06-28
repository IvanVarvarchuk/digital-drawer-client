import { Col, Container, Image, Row } from 'react-bootstrap';
import styles from './about-us.module.css';

/* eslint-disable-next-line */
export interface AboutUsProps {}

export function AboutUs(props: AboutUsProps) {
  return (
    <Container>
      <Row>
        <h4>Who we are?</h4>
        <p>
          Our service is designed to provide you with a convenient and efficient
          way to convert drawing images into high quality and editable CAD
          files. Using computer vision algorithms, we are able to automatically
          recognize drawing elements such as lines, circles, polygons, etc., and
          accurately transfer them to DXF and IFC formats.
        </p>
        <p>
          Our web service offers a quick and easy conversion procedure. All you
          have to do is upload your image files and we'll take care of the rest.
          Our algorithms analyze your files and generate an accurate drawing.
          You can upload drawings in different formats like JPG, PNG.
        </p>

        <p>
          We understand how important it is to you to be able to edit and work
          with drawings in your favorite CAD environment. Therefore, our service
          provides conversion to popular DXF and IFC formats, which are
          supported by many CAD programs. You will receive a file ready for
          import and further editing in your favorite CAD tool.
        </p>
      </Row>
      <Row>
        <Col md={8}>
          <h4>Ivan Varvarchuk</h4>
          <p>
            Hi, I'm Ivan! I am a full-stack developer in DigitalDrawer team with
            experience in Typescript, React, and C#.{' '}
          </p>
          <h5>Skills</h5>
          <ul>
            <li>ASP.Net Core</li>
            <li>Typescript</li>
            <li>React</li>
          </ul>
          <h5>Experience</h5>
          <ul>
            <li>
              2018 - Current: Lviv Polytechnic National University Student
            </li>
          </ul>
          <span>Contact phone: 
          </span>
            <a href='/about'>380639599829</a> 
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
