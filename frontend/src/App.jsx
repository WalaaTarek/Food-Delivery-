import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Menu from "./components/Menu";
import ContactUs from "./ContactUs";
import SingleItemView from "./components/SingleItemView";
import Category from "./components/Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/singleitemview" element={<SingleItemView />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
