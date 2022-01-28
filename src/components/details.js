import React from 'react';
import { useParams } from "react-router-dom";
import  { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


const MoviesData = (props) => {
    const params = useParams();
    const [data,setData] = useState({});
useEffect(()=>{
		axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b8919244094570b28f180764d22ca85f`)
		.then ((res)=>{
			setData(res.data)
		})
		.catch((error)=>{
			console.log(error);
		})
	},[])
	return (
		<div className="container detailsMovie">
				<div className=" card col-3 bg-dark m-auto" style={{ width: "100 rem"}}>
				<img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} className="card-img-top" alt={data.title} />
				<div className="card-body">
					<h5 className="card-title" style={{color: "#fff", textAlign:"center"}}>{data.title}</h5>
                    <p>{data.overview}</p>
				</div>
			</div>
			</div>

	);
};

export default MoviesData;
