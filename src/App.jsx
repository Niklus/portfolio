import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import { projects } from "./data/projects.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home projects={projects} />} />
        <Route path="/project" element={<Project projects={projects} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
