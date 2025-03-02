import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `
  import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current URL path

  const handleLogout = () => {
    toast.error("Logged out!!", { position: "top-right", autoClose: 2000 });

    setTimeout(() => {
      setIsLoggedIn(false);
      navigate("/");
    }, 2000); // Wait for toast to disappear before redirecting
  };

  return (
    <nav className="navbar">
      <h1 className="logo">📚 Online Bookstore</h1>
      <div className="nav-links">
        {isLoggedIn ? (
          <>
            <Link to="/home">Home</Link>
            <Link to="/book-of-the-day">Book of the Day</Link>
            <Link to="/cart">Cart</Link>
            {/* Hide Logout button on the Login page */}
            {location.pathname !== "/login" && (
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </>
        ) : (
          location.pathname !== "/login" && <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

  `;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
