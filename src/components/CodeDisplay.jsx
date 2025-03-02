import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `
 import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const BookOfTheDay = ({ cart, setCart }) => {  // Ensure these props are received
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/data/books.json").then((res) => {
      const randomBook = res.data[Math.floor(Math.random() * res.data.length)];
      setBook(randomBook);
    });
  }, []);

  if (!book) return <p>Loading...</p>;

  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === book.id)) {
      setCart([...cart, book]);  // setCart should now be available
      toast.success("Added to Cart!", { position: "top-right", autoClose: 2000 });
    } else {
      toast.info("Book already in cart!", { position: "top-right", autoClose: 2000 });
    }
  };

  return (
    <div className="book-of-the-day-container">
      <h2 className="book-title">📖 Book of the Day</h2>
      <div className="book-detail-card">
        <img src={book.coverImage} alt={book.title} className="book-detail-image" />
        <div className="book-info">
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p className="price">{book.price}</p>
          <div className="button-group">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="view-cart-btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheDay;


  `;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
