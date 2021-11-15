import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:5000/user/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Make Admin Sucessfully");
        }
      });
  };
  return (
    <div className="my-5 py-5">
      <div className="w-50 mx-auto">
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" className="w-100" type="submit">
            Make Admin
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MakeAdmin;
