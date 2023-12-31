import React from "react";

import * as ReactDOM from "react-dom";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// import style manually
import "react-markdown-editor-lite/lib/index.css";

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!

const markdown = ({ handleChange }) => {
  const handleEditorChange = ({ html }) => {
    console.log("handleEditorChange", html);
    handleChange(html);
  };

  return (
    <div>
      <MdEditor
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default markdown;

