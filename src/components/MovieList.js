import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styleMovies.css';
import favIcon from '../assets/fill.svg' ;
import {useSelector, useDispatch} from "react-redux";
import {AddFav} from '../store/actions/favorites';
import {getMovies} from '../store/actions/getMovies';

const MovieList = (props) => {
	//const FavouriteComponent = props.favouriteComponent;
	const favMovies = useSelector((state)=>state.Favorite_Reducer.Favorites);
	const dispatch = useDispatch();
	const [movie,setMovie] = useState([]);
	const get_Movies = useSelector((state)=>state.Movies_Reducer.movies_lst);
	// useEffect(()=>{
	// 	axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b8919244094570b28f180764d22ca85f")
	// 	.then ((res)=>{
	// 		setMovie(res.data.results)
	// 	})
	// 	.catch((error)=>{
	// 		console.log(error);
	// 	})
	// },[])
useEffect(()=>{
	dispatch(getMovies());
},[])

const toggleFav = (currMovie) =>{
	const movieExsit = favMovies.filter((movie)=> movie.id === currMovie.id)
        
    if ( movieExsit.length === 0 ){
      favMovies.push(currMovie);
      dispatch(AddFav(favMovies));
	  console.log(favMovies)
    }
    else{
      const updatedArray = favMovies.filter((movie)=> movie.id !== movieExsit[0].id)  
      dispatch(AddFav(updatedArray));
    }

}
	return (
		<div className="container classMovie">
				<div className="row">
			{get_Movies.map((film) => (
				<div className=" card col-3 bg-dark m-auto" key={film.id}>
				<img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className="card-img-top" alt={film.title} />
				<div className="card-body">
					<h5 className="card-title" style={{color: "#fff", textAlign:"center"}}>{film.title}</h5>
					<Link to={`/details/${film.id}`} className="btn btn-danger">Details</Link>
					<img onClick={() => toggleFav(film)} className="fav" src={favIcon} alt="fav-icon"/>
				</div>
			</div>
			))}
			</div>
			</div>
	);
};

export default MovieList;