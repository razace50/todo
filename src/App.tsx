import React from "react";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/Signup";
import Dashboard from "./components/dashboard/Dashboard";
``;
import { Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
