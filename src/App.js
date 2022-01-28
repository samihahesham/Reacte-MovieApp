import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Navbar from './components/navbar';
import MoviesData from './components/details';
import Favorites from './pages/favorites';
import {LanguageContext} from './context/language_context';

const App = () => {
	const [contextLang,setContextLang] = useState("en");
	return (
		<LanguageContext.Provider value={{contextLang,setContextLang}}>
		<BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path={"/favorites"} exact component={Favorites} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/signup"} exact component={Signup} />
          <Route path={"/"} exact component={MovieList} />
          <Route path={"/details/:id"} exact component={MoviesData} />
          {/* <Route path={"*"} component={Notfound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
	</LanguageContext.Provider>

	);
};

export default App;