import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `
  import React from "react";

  const MyComponent = () => {
    return <h1>Hello, React!</h1>;
  };

  export default MyComponent;
  `;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
