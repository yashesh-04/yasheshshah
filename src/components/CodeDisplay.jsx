import React from "react";

const CodeDisplay = () => {
  const codeSnippet = "{cart.length > 0 && (
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
          
";

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
