import React from "react";
import { Form,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
  const { createAccount } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    createAccount(data.email, data.password, data.name)
  };
  return (
    <div className="my-5 py-5">
      <div className="w-50 mx-auto border p-5">
        <h1 className="fw-3 text-center">Register</h1>

        <Form  onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control style={{padding:'17px'}} type="text" placeholder="Enter Name" {...register("name", { required: true })} />
            {errors.name && <span className="text-danger">Name field is required</span>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control style={{padding:'17px'}} type="email" placeholder="Enter email" {...register("email", { required: true })}  />
            {errors.email && <span className="text-danger">Email field is required</span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control style={{padding:'17px'}} type="password" placeholder="Password" {...register("password", { required: true,minLength: 6 })}  />
            {errors.password && <span className="text-danger">Password field is required And Must Have 6 Chrater</span>}
          </Form.Group>
          <p className="py-3">
            Already Have A Account?<Link to="/login">Login</Link>
          </p>
          <Button style={{padding:'17px'}} variant="primary" className="w-100" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
