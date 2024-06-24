import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Artist from "./Artist";
import Recording from "./Recording";
import Release from "./Release";
import Genre from "./Genre";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:artist" element={<Artist />} />
        <Route path="/recording/:artist/:recording" element={<Recording />} />
        <Route path="/release/:artist/:release" element={<Release />} />
        <Route path="/genre/:genre" element={<Genre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
