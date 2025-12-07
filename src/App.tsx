import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Movies from "./pages/Movies";
import Universe from "./pages/Universe";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/universe" element={<Universe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
