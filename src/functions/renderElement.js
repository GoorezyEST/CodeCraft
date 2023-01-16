import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js_beautify from "js-beautify";

const renderElement = (item) => {
  if (item.hasOwnProperty("text")) {
    return <p>{item.text}</p>;
  } else if (item.hasOwnProperty("link")) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        Vamonos
      </a>
    );
  } else if (item.hasOwnProperty("img")) {
    return <img src={item.img.src} alt={item.img.alt} />;
  } else if (item.hasOwnProperty("code")) {
    const formattedCode = js_beautify.html(item.code.code);
    return (
      <SyntaxHighlighter
        className="codeBlock"
        language={item.code.language}
        style={atomDark}
      >
        {formattedCode}
      </SyntaxHighlighter>
    );
  }
};

export default renderElement;
