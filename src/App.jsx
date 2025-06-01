import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Admin from "./pages/Admin";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import NotFound from './pages/NotFound'
const App = () => {
  return (
    <Routes>
      <Route path="*" element = {<NotFound/>}/>
      <Route path="/" element={<Hero />}>
        <Route path="login" element={<Login />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
