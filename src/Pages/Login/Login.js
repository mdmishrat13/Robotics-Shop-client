import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { emailAndPasswordSignIn, googleSignIn, setUser, setIsLoading,saveUser } = useAuth();

  const location = useLocation();
  const url = location.state?.from || "/";
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailAndPasswordSignIn(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const googlehandeler = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName,'PUT')
        history.push(url);
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log(url);
  return (
    <div className="my-5 py-5">
      <div className="w-50 mx-auto border p-5">
        <h1 className="py-4 text-center">Please Login Here</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
            style={{padding:'17px'}}
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
            style={{padding:'17px'}}
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
          <p className="py-3">
            Don't Have A Account?<Link to="/register">Register Now</Link>
          </p>
          <Button style={{padding:'17px'}} variant="info" className="w-100" type="submit">
            Login
          </Button>
          <Button
          style={{padding:'17px'}}
            variant="info"
            className="w-100 my-3"
            onClick={googlehandeler}
          >
            Login with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
