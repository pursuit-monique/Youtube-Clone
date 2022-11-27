import React from 'react';
import errorimg from '../error.png';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

export default function Error(props) {
    console.log({...props})
    const {error} = props;
    const color = {
        color: '#DC4C64'
    }
    function linkParser(errormsg){
        if (errormsg){
            if(errormsg.includes('<a href="')){
            let msg = errormsg.split('<a href="')[0];
            let link = errormsg.split('<a href="')[1];
            let link2 = link.split('">')[1].replace("</a>", "");
            let link3 = `https://developers.google.com${link.split('">')[0]}`;
            console.log(link3)
            return (
            <>
                {msg} <a className={color} href={link3}>{link2}</a>
            </>
            )
            } else {
                return (
                    <>
                    {errormsg}
                    </>
                )
            }
        } else {
            return 'lol wut'
        }
    }
    linkParser(error.message)
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
              <p className="text-justify text-center">{linkParser(error.message)}</p>
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