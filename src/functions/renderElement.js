import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const renderElement = (item) => {
  if (item.hasOwnProperty("text")) {
    return (
      <div className="text_container">
        <h3>{item.text.title}</h3>
        <p>{item.text.text}</p>
      </div>
    );
  } else if (item.hasOwnProperty("link")) {
    return (
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        Vamonos
      </a>
    );
  } else if (item.hasOwnProperty("img")) {
    return <img src={item.img.src} alt={item.img.alt} />;
  } else if (item.hasOwnProperty("code")) {
    return (
      <SyntaxHighlighter
        className="codeBlock"
        language={item.code.language}
        style={atomDark}
      >
        {item.code.code}
      </SyntaxHighlighter>
    );
  }
};

export default renderElement;
