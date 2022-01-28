import axios from "axios";


export const getMovies = () => async (dispatch) => {
return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=b8919244094570b28f180764d22ca85f").then(
(res) => dispatch({ type: 'GET_MOVIES', payload :
res.data.results }),
(err) => console.log("err")
);
};
