import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `
 import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetailPage = ({ cart, setCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get("/data/books.json").then((res) => {
      const selectedBook = res.data.find((b) => b.id === Number(id));
      setBook(selectedBook);
    });
  }, [id]);

  if (!book) return <p>Loading...</p>;

  const handleAddToCart = () => {
    setCart([...cart, book]);
    toast.success("Added to Cart!!", { position: "top-right", autoClose: 2000 });
  };

  return (
    <div className="book-detail-container">
      <div className="book-detail-card">
        <img src={book.coverImage} alt={book.title} className="book-detail-image" />
        <div className="book-info">
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p className="price">{book.price}</p>
          <div className="button-group">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add to Cart
            </button>
            <button onClick={() => navigate("/cart")} className="view-cart-btn">
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;


  `;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
