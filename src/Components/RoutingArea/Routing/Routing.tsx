import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import BookList from "../../BookArea/BookList/BookList";
import About from "../../LayoutArea/PagesAread/About/About";
import Home from "../../LayoutArea/PagesAread/Home/Home";
import Page404 from "../../LayoutArea/PagesAread/Page404/Page404";

import "./Routing.css";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Page404 />} />
        <Route path="books" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default Routing;
