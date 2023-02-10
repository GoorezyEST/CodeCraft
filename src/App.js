import "./App.css";
import Home from "./components/home/Home";
import Article from "./components/article/Article";
import arts from "./articles.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/3d-css-carta"
          element={<Article jsonObject={arts.articles[0].cardHover} />}
        />
        <Route
          path="/i18n-react"
          element={<Article jsonObject={arts.articles[1].i18nReact} />}
        />
        <Route
          path="/meta-tag-favs"
          element={<Article jsonObject={arts.articles[2].metaTagFav} />}
        />
        <Route
          path="/pd-singleton"
          element={
            <Article jsonObject={arts.articles[3].dessignPatterSingleton} />
          }
        />
        <Route
          path="/pd-factory"
          element={
            <Article jsonObject={arts.articles[4].dessignPatterFactory} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
