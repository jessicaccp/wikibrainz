import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Artist from "../resources/Artist";
import Recording from "../resources/Recording";
import Release from "../resources/Release";
import Genre from "../resources/Genre";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist/:artist" element={<Artist />} />
        <Route path="/recording/:recording" element={<Recording />} />
        <Route path="/release/:release" element={<Release />} />
        <Route path="/genre/:genre" element={<Genre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
