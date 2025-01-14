import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeCardPage from "./pages/EmployeeCardPage";
import EmployeeListPage from "./pages/EmployeeListPage";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<EmployeeListPage />} />
            <Route path="/employee/:id" element={<EmployeeCardPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
