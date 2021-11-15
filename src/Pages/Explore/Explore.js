import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../Homepage/Product/Product";

const Explore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-stream-26427.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container style={{paddingBottom:'10px'}}>
      <h5 className="text-center display-5 my-3">Choose Arduino</h5>
      <div className=" p-4 text-end">
      </div>
      <Row xs={1} sm={2} md={3} className="g-3">
        {
          products.map(product => <Product product={product} />)
        }
        
      </Row>
    </Container>
  );
};

export default Explore;
