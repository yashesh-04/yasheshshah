import React from "react";

const CodeDisplay = () => {
  const codeSnippet = `hi`;

  return (
    <pre>
      <code>{codeSnippet}</code>
    </pre>
  );
};

export default CodeDisplay;
