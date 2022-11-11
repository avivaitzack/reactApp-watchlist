import React, {  Route,  Link, Routes, } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Home from "./Components/home";

export default function App() {
  return (
    <div> 
      <Link to={'/Home'}>home </Link><br/>
      <Link to={'/login'}> log-in </Link>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}
