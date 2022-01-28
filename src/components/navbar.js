import React from 'react';
import { Link } from "react-router-dom";
import './styleMovies.css';
import {useSelector} from "react-redux";
import { useContext, useEffect } from 'react';
import {LanguageContext} from '../context/language_context';

const Navbar = () => {
  let readArr= useSelector((state)=>state.Favorite_Reducer.Favorites);
  const {contextLang,setContextLang} = useContext(LanguageContext); 
  useEffect(()=>{
},[readArr])
console.log(readArr);
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
                        <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
                        <li className="nav-item">
              <Link className="nav-link" to="/favorites">Favorites</Link>
            </li>
            <li className="nav-item"><span className="nav-item">{readArr.length}</span></li>
            <li className="nav-item">
            <button className="navbtn btn btn-danger" onClick={()=>setContextLang("ar")}>{contextLang}</button>
            </li>
            </ul>
        </div>
      </nav>
	);
};
export default Navbar;