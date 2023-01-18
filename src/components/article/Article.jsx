import React from "react";
import "./Article.css";
import renderElement from "../../functions/renderElement";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Article = ({ jsonObject }) => {
  return (
    <div className="container">
      <Link to="../" className="return">
        <IoIosArrowBack className="return-icon" />
      </Link>
      <div className="article">
        {jsonObject.map((item, index) => {
          console.log(jsonObject);
          if (item.hasOwnProperty("title")) {
            return <h1 key={index}>{item.title}</h1>;
          } else {
            return Object.values(item).map((innerItem, innerIndex) => {
              return Object.values(innerItem).map((element, elementIndex) => {
                return (
                  <div
                    key={`${index}-${innerIndex}-${elementIndex}`}
                    className="content"
                  >
                    {renderElement(element)}
                  </div>
                );
              });
            });
          }
        })}
      </div>
      <div className="footer">
        <span>CodeCraft</span>
        <p>Desarrollado por Goorezy</p>
        <p>¡Gracias por visitar!</p>
      </div>
    </div>
  );
};

export default Article;
