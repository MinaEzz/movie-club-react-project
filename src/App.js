import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";
import Intro from "./components/intro/Intro.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
