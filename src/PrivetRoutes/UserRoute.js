import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";
import ReactLoading from 'react-loading';

const UserRoutes = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <ReactLoading type="balls" color="green" height={667} width={375} />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default UserRoutes;
