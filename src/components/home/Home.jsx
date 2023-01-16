import { React, useState, useEffect } from "react";
import "./Home.css";
import data from "../../articles-min.json";
import { Link } from "react-router-dom";

function Home() {
  /*==== STATES  =====*/
  const [type, setType] = useState("todos");
  const [order, setOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");
  const [loaded, setLoaded] = useState(false);

  /*==== LOADING  =====*/
  const images = data.articles.map((item) => item.img);

  useEffect(() => {
    const imageElements = images.map((img) => new Image());
    let imagesLoaded = 0;
    imageElements.forEach((image, i) => {
      image.src = images[i];
      image.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          setLoaded(true);
        }
      };
    });
  }, [images]);

  /*==== DATE FUNCTIONALITY =====*/
  const parseDate = (date) => {
    const [day, month, year] = date.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  /*==== INPUT FUNCTIONALITY =====*/
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      {!loaded && (
        <div className="loading">
          <div className="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <section className="home_container">
        <div className="home_header">
          <div className="home_header_title">
            <h2>CodeCraft</h2>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="home_header_filters">
            <span onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>
              Ordenar
            </span>
            <span
              className={type === "todos" ? "active_filter filter" : "filter"}
              onClick={() => {
                setType("todos");
              }}
            >
              Todos
            </span>
            <span
              className={type === "css" ? "active_filter filter" : "filter"}
              onClick={() => {
                setType("css");
              }}
            >
              CSS
            </span>
            <span
              className={type === "code" ? "active_filter filter" : "filter"}
              onClick={() => {
                setType("code");
              }}
            >
              Codigo
            </span>
          </div>
        </div>
        <div className="home_content">
          {searchQuery === "" ? (
            data.articles
              .sort((a, b) => {
                const dateA = parseDate(a.date);
                const dateB = parseDate(b.date);
                return order === "asc" ? dateA - dateB : dateB - dateA;
              })
              .filter((item) => (type === "todos" ? true : item.tipo === type))
              .length > 0 ? (
              data.articles
                .sort((a, b) => {
                  const dateA = parseDate(a.date);
                  const dateB = parseDate(b.date);
                  return order === "asc" ? dateA - dateB : dateB - dateA;
                })
                .filter((item) =>
                  type === "todos" ? true : item.tipo === type
                )
                .filter(
                  (item) =>
                    searchQuery === "" ||
                    item.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <Link
                      to={item.link}
                      className="home_content_article"
                      key={index}
                    >
                      <img src={item.img} alt={item.alt} />
                      <div className="home_content_article_data">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <span>{item.date}</span>
                      </div>
                    </Link>
                  );
                })
            ) : (
              <div className="noart">
                <p>¡No hay articulos para mostrar!</p>
              </div>
            )
          ) : data.articles
              .sort((a, b) => {
                const dateA = parseDate(a.date);
                const dateB = parseDate(b.date);
                return order === "asc" ? dateA - dateB : dateB - dateA;
              })
              .filter(
                (item) =>
                  (type === "todos" ? true : item.tipo === type) &&
                  (searchQuery === "" ||
                    item.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()))
              ).length > 0 ? (
            data.articles
              .sort((a, b) => {
                const dateA = parseDate(a.date);
                const dateB = parseDate(b.date);
                return order === "asc" ? dateA - dateB : dateB - dateA;
              })
              .filter(
                (item) =>
                  (type === "todos" ? true : item.tipo === type) &&
                  (searchQuery === "" ||
                    item.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()))
              )
              .map((item, index) => {
                return (
                  <Link
                    to={item.link}
                    className="home_content_article"
                    key={index}
                  >
                    <img src={item.img} alt={item.alt} />
                    <div className="home_content_article_data">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                      <span>{item.date}</span>
                    </div>
                  </Link>
                );
              })
          ) : (
            <div className="noart">
              <p>¡No hay articulos para mostrar!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
