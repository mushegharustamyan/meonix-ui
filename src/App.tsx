import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import TasksPage from "./components/TasksPage/TasksPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/welcome/:telegramId" element={<WelcomePage />} />
        <Route path="/tasks/:telegramId" element={<TasksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
