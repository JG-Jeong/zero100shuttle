import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Zero100Navbar from "./Component/Zero100Navbar";
import HomeMainPage from "./Component/HomeMainPage";
import SuttleMainPage from "./Component/ShuttleMainPage";
import MainQuestionsDropdown from "./Component/DropDown";
import Answers from "./Component/Answers";

function App() {
  return (
    <div className="App">
      <Zero100Navbar />
      <br />
      <MainQuestionsDropdown />
      <br />
      <img className="bg-main" src={require("./img/pcPremium.jpg")}></img>
      <br />

      <Routes>
        <Route path="/" element={<HomeMainPage />} />
        <Route path="/Suttles" element={<SuttleMainPage />} />
        <Route path="/Karaoke" element={<div>준비중</div>} />
        <Route path="/*" element={<div>존재하지 않는 페이지 입니다.</div>} />
        <Route path="/answer/:id" element={<Answers />} />
      </Routes>
    </div>
  );
}

export default App;
