import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
