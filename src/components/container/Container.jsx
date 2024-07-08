import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../header/Header";
import Week from "../../pages/week/Week";
import Today from "../../pages/today/Today";

const Container = () => {
  return (
    <div className="flex flex-col w-[100%]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/Today" />} />
          <Route path="/week" element={<Week />} />
          <Route path="/Today" element={<Today />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Container;