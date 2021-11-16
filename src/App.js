import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
