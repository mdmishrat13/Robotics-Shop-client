import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";
import ReactLoading from 'react-loading';

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading,admin } = useAuth();
  if (isLoading) {
    return <ReactLoading type="balls" color="green" height={667} width={375} />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
