import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddProduct = () => {
  const name = useRef();
  const price = useRef();
  const image = useRef();
  const describtion = useRef();

  const productHandeler = (e) => {
    e.preventDefault();
    const data = {
      name: name.current.value,
      price: price.current.value,
      image: image.current.value,
      describtion: describtion.current.value,
    };

    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Added Successfully");
        }
      });
  };
  return (
    <div style={{maxWidth:'80%',margin:'auto'}}>
        <Form className="w-100" onSubmit={productHandeler}>
      <Form.Group className="mb-3" controlId="productName">
        <Form.Label>Arduino Name</Form.Label>
        <Form.Control type="text" id="productName" ref={name} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Arduino Image Link</Form.Label>
        <Form.Control type="text" id="image" ref={image} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Arduino Price</Form.Label>
        <Form.Control type="number" id="price" ref={price} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="describtion">
        <Form.Label>Arduino Describtion</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          id="describtion"
          ref={describtion}
          required
        />
      </Form.Group>
      <Button variant="info" className="w-100" type="submit">
        Add Arduino
      </Button>
    </Form>
    </div>
  );
};

export default AddProduct;
