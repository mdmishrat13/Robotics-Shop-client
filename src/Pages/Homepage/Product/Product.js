import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <Col>
      <Card className="border-0 " >
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="text-center">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.describtion.slice(0, 100)}</Card.Text>
          <h4>{product.price} Taka</h4>
          <Link to={`/purchase/${product._id}`}>
            <Button className="btn btn-md btn-outline-primary">Purchase Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>

    </div>
  );
};

export default Product;
