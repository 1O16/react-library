import React, { useState } from "react";
import { Modal, Container, Row, Col, Button } from "react-bootstrap";
import "./grid.css";

export default function MydModalWithGrid() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch modal with grid
      </Button>
      <Modal
        onHide={() => setModalShow(false)}
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8} className="col-color">
                .col-xs-12 .col-md-8
              </Col>
              <Col xs={6} md={4} className="col-color">
                .col-xs-6 .col-md-4
              </Col>
            </Row>

            <Row>
              <Col xs={6} md={4} className="col-color">
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4} className="col-color">
                .col-xs-6 .col-md-4
              </Col>
              <Col xs={6} md={4} className="col-color">
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
