import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `return (
    <div className="cart">
      <h2>🛒 Your Cart</h2>

      {cart.length > 0 ? (
        <div className="cart-grid">
          {cart.map((book, index) => (
            <div key={index} className="cart-card">
              <img src={book.coverImage} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.price}</p>
              <button 
                className="remove-btn" 
                onClick={() => {
                  setCart(cart.filter((_, i) => i !== index));
                  toast.info("Item removed!", { position: "top-right", autoClose: 1500 });
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}

      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: <span className="total-price">${totalPrice.toFixed(2)}</span></h3>
          <button className="checkout-btn" onClick={checkout}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

  
`;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
