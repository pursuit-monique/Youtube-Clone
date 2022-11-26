import React from 'react';
import errorimg from '../error.png';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import {
    Link
  } from "react-router-dom"


export default function Error(props) {
    console.log({...props})
    const {error} = props;
    
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Oh-No!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
          <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
              <img className="img-fluid" src={errorimg} alt="OH NO"/>
            </Col>
            <Col xs={6} md={4}>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={4}>
              
            </Col>
            <Col xs={6} md={4}>
              <h2 className="text-justify text-center">{error.code}</h2>
            </Col>
            <Col xs={6} md={4}>
              
            </Col>
          </Row>
          <Row>
            <Col md="auto">
              <p  className="text-justify text-center">{error.message}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}