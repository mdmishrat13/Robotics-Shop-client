import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [getParches, setGetParches] = useState({});

  useEffect(() => {
    fetch(`https://limitless-stream-26427.herokuapp.com/purchase/${id}`)
      .then((res) => res.json())
      .then((data) => setGetParches(data))
      .catch(() => {
        setGetParches({});
      });
  }, []);

  const buyHandeler = (e) => {
    e.preventDefault();
    const detiles = {
      userEmail: user.email,
      name: getParches.name,
      price: getParches.price,
      image: getParches.image,
      status: 1,
    };
    fetch("https://limitless-stream-26427.herokuapp.com/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(detiles),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Congratulation You buy a Watch");
        }
      });
  };
  return (
    <Container>
      <h1 className="fs-1 my-5 border-bottom p-3">PHARCHES YOUR WATCH</h1>
      <Row>
        <Col sm={12} md={4}>
          <img src={getParches.image} alt="watch" className="img-fluid" />
          <h4 className="my-3">PRICE: ${getParches.price}</h4>
        </Col>
        <Col sm={12} md={8}>
          <Form className="w-100" onSubmit={buyHandeler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={user.displayName} id="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={user.email} id="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={getParches.name}
                id="productName"
              />
            </Form.Group>
            
            <Button variant="primary" className="w-100" type="submit">
              Pharches
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Purchase;
