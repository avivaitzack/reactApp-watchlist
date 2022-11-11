import React, {  Route,  Link, Routes,   } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Home from "./Components/home";
import NavBar from './Components/Nav';
import Footer from './Components/Footer';
import Favorites from "./Components/Favorites";
import Register from "./Components/Register";


export default function App() {
 
  return (
    <div> 
      <NavBar/>
      <Link to={'/Home'}> </Link>
      <Link to={'/login'}>  </Link>
      <Link to={'/register'}>  </Link>
      <Link to={'/favorites'}>  </Link>
      <Link to={'/navbar'}>  </Link>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
      <Footer/>
    </div>
  );
}
