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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
