import React, {  Route,  Link, Routes} from "react-router-dom";
import LogIn from "./Components/LogIn";
import Home from "./Components/Home";
import NavBar from './Components/Nav';
import Footer from './Components/Footer';
import Favorites from "./Components/Favorites";
import Register from "./Components/Register";
import Gallery from "./Components/Gallery";
import Genre from './Components/GenreGallery'


export default function App() {

  return (  
  <>
    <NavBar/>
  <div style={{marginTop:'80px'}}> 
      <Link to={'/'}> </Link>
      <Link to={'/login'}>  </Link>
      <Link to={'/register'}>  </Link>
      <Link to={'/favorites'}>  </Link>
      <Link to={'/navbar'}>  </Link>
      <Link to={'/gallery'}>  </Link>
      <Link to={'/genre'}>  </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/genre/:genre" element={<Genre/>} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}
