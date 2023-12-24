"use client";
import { Container, Accordion, Row, Col } from "react-bootstrap";

function FaqAccordion() {
  return (
    <Container data-testid="accordion" className="mt-100 p-0" id="faq">
      <Row className="justify-content-md-start justify-content-center">
        <Col md={4}>
          <h3 className="heading-bold pb-2">Frequently Asked Question</h3>
          <p className="body-light">
            Lorem ipsum dolor sit amet, consecetur adipiscing elit
          </p>
        </Col>
        <Col md={7} className="offset-md-1">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="mb-3">
              <Accordion.Header>Frequently Asked Question</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mb-3">
              <Accordion.Header>
                Apa saja syarat yang dibutuhkan?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mb-3">
              <Accordion.Header>
                {" "}
                Berapa hari minimal sewa mobil lepas kunci?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="mb-3">
              <Accordion.Header>
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className="mb-3">
              <Accordion.Header>
                Apakah Ada biaya antar-jemput ?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default FaqAccordion;
