import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `
  import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

  `;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
