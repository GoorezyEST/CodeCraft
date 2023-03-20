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
        <Route
          path="/pd-abstract-factory"
          element={
            <Article jsonObject={arts.articles[5].dessignPatterAbsFactory} />
          }
        />
        <Route
          path="/pd-prototype"
          element={
            <Article jsonObject={arts.articles[6].dessignPatterPrototype} />
          }
        />
        <Route
          path="/pd-facade"
          element={
            <Article jsonObject={arts.articles[7].dessignPatterFacade} />
          }
        />
        <Route
          path="/hearth-css"
          element={<Article jsonObject={arts.articles[8].cssHearth} />}
        />
        <Route
          path="/hearth-css"
          element={<Article jsonObject={arts.articles[8].cssHearth} />}
        />
        <Route
          path="/pd-decorator"
          element={
            <Article jsonObject={arts.articles[9].dessignPatterDecorator} />
          }
        />
        <Route
          path="/pd-proxy"
          element={
            <Article jsonObject={arts.articles[10].dessignPatterProxy} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
