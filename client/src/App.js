import React, {  Route,  Link, Routes, } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Home from "./Components/home";
import NavBar from './Components/Nav';
import Footer from './Components/Footer';
import Favorites from "./Components/Favorites";
import Register from "./Components/Register";

export default function App() {
  return (
    <div> 
      <Link to={'/Home'}>home </Link><br/>
      <Link to={'/login'}> log-in </Link><br/>
      <Link to={'/register'}> register </Link><br/>
      <Link to={'/favorites'}> favorites </Link><br/>
      <Link to={'/footer'}> footer </Link><br/>
      <Link to={'/navbar'}> navbar </Link>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </div>
  );
}
