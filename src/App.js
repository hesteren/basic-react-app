import "./assets/styles/app/App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/header/Header.js";
import Footer from "./layouts/footer/Footer.js";
import Home from "./routes/Home.js";
import Login from "./routes/Login.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
