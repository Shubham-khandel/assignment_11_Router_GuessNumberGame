import "./App.css";
import { AboutMe } from "./Components/About/About";
import { Nav } from "./Components/Nav/Nav";
import { Login } from "./Components/login/Login";
import { Home } from "./Components/home/Home";
import { Routes, Route } from "react-router-dom";
import { Register } from "./Components/login/Register";
import GuessNumberGame from "./GuessLuckyNo/GuessLuckyNo";

function App() {
  return (
    <>
    <GuessNumberGame/>
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
