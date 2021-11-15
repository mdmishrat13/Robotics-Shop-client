import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, LogOut } = useAuth();
  const logoutHandeler = () => {
    LogOut();
  };
  return (
    <Navbar style={{backgroundColor: "#071740", position: "sticky"}} variant="dark" fixed="top" expand="lg">
      <Container className="py-4">
        <Navbar.Brand as={NavLink} to="/">
         <h1 style={{color:"#E3D5FB"}}>Robotics Shop</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "1000px" }}
            navbarScroll
          >
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/explore">
             Explore
            </Nav.Link>
            {user.email && (
              <Nav.Link as={NavLink} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
            {!user.email && (
              <Nav.Link as={NavLink} to="/login">
                Login
              </Nav.Link>
            )}
            {!user.email && (
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            )}

            {user.email && (
              <Nav.Link>
                <div className="d-inline fs-4 mx-2" onClick={LogOut}>
                  <div className="btn btn-outline-light btn-md">Logout</div>
                </div>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
