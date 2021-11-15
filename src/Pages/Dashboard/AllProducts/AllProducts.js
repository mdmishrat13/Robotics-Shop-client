import React, { useState, useEffect } from "react";
import { Table, Button} from "react-bootstrap";
import ReactLoading from 'react-loading';

const AllProducts = () => {
  const [getAllProducts, setGetAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-stream-26427.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setGetAllProducts(data));
  }, []);

  const deleteHandelerFromUi = (item) => {
    const removeItem = getAllProducts.filter((product) => product._id != item);
    setGetAllProducts(removeItem);
  };
  const deleteHandeler = (id) => {
    const confirmation = window.confirm("Are you sure to delete??");
    if (confirmation) {
      deleteHandelerFromUi(id);
      fetch(`https://limitless-stream-26427.herokuapp.com/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json)
        .then((data) => alert("Your Data Delete Successfully"));
    }
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {getAllProducts.length ? (
          getAllProducts.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price} Taka</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => deleteHandeler(product._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <div className="my-4">
            <ReactLoading type="balls" color="green" height={667} width={375} />
          </div>
        )}
      </tbody>
    </Table>
  );
};

export default AllProducts;
