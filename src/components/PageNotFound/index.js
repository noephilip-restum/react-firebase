import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <div className="regs-main-container">
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/" className="redirect-style">
          Click to return to home page
        </Link>
      </div>
    </>
  );
};
