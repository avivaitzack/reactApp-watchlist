import React, {  Route,  Link, Routes,   } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Home from "./Components/home";
import NavBar from './Components/Nav';
import Footer from './Components/Footer';
import Favorites from "./Components/Favorites";
import Register from "./Components/Register";
import Gallery from "./Components/Gallery";


export default function App() {
 
  return (  
  <div><NavBar/>
  <div style={{marginTop:'80px'}}> 
   <Gallery/>
   </div>
    <Footer/>
      <Link to={'/home'}> </Link>
      <Link to={'/login'}>  </Link>
      <Link to={'/register'}>  </Link>
      <Link to={'/favorites'}>  </Link>
      <Link to={'/navbar'}>  </Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
      
    </div>
  );
}
