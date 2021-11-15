import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
    <Container>
        <Row>
        <Col style={{marginBottom:'20px'}} xs={12} md={6} className="text-center">
            <img style={{maxWidth:"100%"}} src="https://i.ibb.co/zF9xbdt/In-Robotics-Development-Laboratory-Top-Male-Scientist-Works-on-a-Bionics-Exoskeleton-Prototype-Team.jpg" alt="" />
        </Col>
        {/* <Col xs={12} md={4} className="text-center">
            
        </Col> */}
        <Col style={{marginBottom:'20px'}} xs={12} md={6} className="text-center">
            <h1>Robotics and other combinations will make the world pretty fantastic compared with today.</h1>
        </Col>
        </Row>
    </Container>

    </>
  );
};

export default Banner;
