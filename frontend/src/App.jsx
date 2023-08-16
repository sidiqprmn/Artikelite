import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbarguest from "./components/layout/navbar/navbarguest";
import Admin from "./pages/admin";
import Artikel from "./pages/artikel";
import Final from "./pages/final";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbarguest />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/asd" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
