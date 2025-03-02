import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((acc, book) => acc + parseFloat(book.price.replace("$", "")), 0);

  const checkout = () => {
    toast.success("Order Successful! 🎉", { position: "top-right", autoClose: 2000 });
    setTimeout(() => {
      setCart([]); // Clear cart after toast disappears
    }, 2000);
  };

  
`;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
