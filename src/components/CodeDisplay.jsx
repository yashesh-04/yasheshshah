import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `
  import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear user session
    toast.error("Logged OUT", { position: "top-right", autoClose: 2000 });

    // Wait for toast to disappear before redirecting
    setTimeout(() => {
      navigate("/login"); // Redirect to login page
    }, 2000);
  };

  return (
    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
  );
};

export default Logout;

  `;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
