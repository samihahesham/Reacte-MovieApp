import {useSelector} from "react-redux";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Favorites(){
    let readArr= useSelector((state)=>state.Favorite_Reducer.Favorites);
    	useEffect(()=>{
	},[readArr])
console.log(readArr);
return (
	<div className="container ">
				<div className="row">
			{readArr.map((film) => (
				<div className=" card col-3 bg-dark m-auto" key={film.id}>
				<img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className="card-img-top" alt={film.title} />
				<div className="card-body">
					<h5 className="card-title" style={{color: "#fff", textAlign:"center"}}>{film.title}</h5>
					<Link to={`/details/${film.id}`} className="btn btn-danger">Details</Link>
					
				</div>
			</div>
			))}
			</div>
			</div>

	);
};
