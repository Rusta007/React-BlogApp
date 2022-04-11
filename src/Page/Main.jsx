import { BrowserRouter, Routes, Route } from "react-router-dom";
import Style from './Style.css';
import Layout from "./Layout";
import Home from "./Home";
import Tourism from "./Tourism";
import NoPage from "./NoPage";
import Food from "./Food";
import Fitness from "./Fitness";
import Tech from "./Tech";
import Bollywood from "./Bollywood";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index  element={<Home />} />
          <Route path="tourism" element={<Tourism />} />
          <Route path="food" element={<Food />} />
          <Route path="fitness" element={<Fitness />} />
          <Route path="Technology" element={<Tech />} />
          <Route path="bollywood" element={<Bollywood />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// export default Main;