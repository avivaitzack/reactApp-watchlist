import React, {  Route,  Link, Routes} from "react-router-dom";
import LogIn from "./Components/LogIn";
import Home from "./Components/Home";
import NavBar from './Components/Nav';
import Footer from './Components/Footer';
import Favorites from "./Components/Favorites";
import Register from "./Components/Register";
import Gallery from "./Components/Gallery";
import Genre from './Components/GenreGallery';
import ViewMore from "./Components/ViewMore";
import AboutUs from "./Components/AboutUs";
import './App.css'


export default function App() {

  return (  
  <>
    <NavBar/>
  <div className="flexCenter" > 
      <Link to={'/'}> </Link>
      <Link to={'/login'}>  </Link>
      <Link to={'/register'}>  </Link>
      <Link to={'/favorites'}>  </Link>
      <Link to={'/navbar'}>  </Link>
      <Link to={'/gallery'}>  </Link>
      <Link to={'/genre'}>  </Link>
      <Link to={'/viewmore'}>  </Link>
      <Link to={'/aboutUs'}>  </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/genre/:genre" element={<Genre/>} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/viewmore/:showname" element={<ViewMore />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
      </div>
      <Footer/>
    </>
  );
}
