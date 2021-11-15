import React from "react";
import { Col, Container, ListGroup, Row, Box } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import AddReview from './../../Dashboard/Reviews/AddReview'
import AddProduct from "../AddProduct/AddProduct";
import MakeADmin from "../MakeAdmin/MakeAdmin";
import AllOrder from "../AllOrders/AllOrders";
import MyOrder from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import AllProducts from "../AllProducts/AllProducts";
import AdminRoute from './../../../PrivetRoutes/AdminRoute';

const Dashboard = () => {
  const { user, admin,LogOut } = useAuth();

  let { path, url } = useRouteMatch();
  return (
    <Container className="my-5">
      <Row className="border  py-5">
        <Col md={3} className="mb-4">
          <ListGroup>
            {admin && (
              <>
                <ListGroup.Item as={Link} to={`${url}/addproduct`}>
                  Add Product
                </ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/allproducts`}>
                  All Products
                </ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/makeadmin`}>
                  Make Admin
                </ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/allorders`}>
                  All Order
                </ListGroup.Item>
              </>
            )}

            <ListGroup.Item as={Link} to={`${url}/pay`}>
              Pay
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/myorder`}>
              My Order
            </ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/addreview`}>
              Review
            </ListGroup.Item>
            <ListGroup.Item onClick={()=>LogOut()} style={{cursor:"pointer"}}>
              Logout
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
        <Col md={9}>
          <Switch>
            <Route exact path={path}>
              <h3 className="text-center">Hello {user.displayName}</h3>
              <h6 className="text-center"> Your Role :{admin?"Admin":"Member"}</h6>
            </Route>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/allproducts`}>
              <AllProducts />
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeADmin />
            </AdminRoute>
            <AdminRoute path={`${path}/allorders`}>
              <AllOrder />
            </AdminRoute>
            <Route path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route path={`${path}/myorder`}>
              <MyOrder />
            </Route>
            <Route path={`${path}/addreview`}>
              <AddReview />
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};
export default Dashboard;
