import { useState, useEffect } from "react";
import { useParams } from "react-router";
import {
  BsGraphUp,
  BsWallet2, 
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from "react-icons/bs"

import MovieCard from "../Components/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY
const moviesUrl = import.meta.env.VITE_API

import "./Movie.css"

const Movie = () => {

  const formatCurrency = (number) => {
   return number.toLocaleString(
     "en-US", {
      style: "currency",
      currency: "USD",
     }
   )
 }
  const [movie, setMovie] = useState([]);
  const {id} = useParams()
  
  const getMovie = async (url) => {
        const res= await fetch(url);
        const data = await res.json();
        setMovie(data);
    }
  useEffect(() => {
      const moviesDataUrl = `${moviesUrl}${id}?${apiKey}`;
      getMovie(moviesDataUrl);
        
  }, [])

  return (
    <div className="movie-page">
      {movie &&
        <><MovieCard movie={movie} showLink={false}/>
        <p className="tagline">{movie.tagline}</p>
        <div className="info">
          <h3>
            <BsWallet2/> Budget:
         </h3>
          <p>{movie.budget !=null && movie.budget ? formatCurrency(movie.budget): "Not Found"}</p>
        </div>
        <div className="info">
          <h3>
            <BsGraphUp/> Recept:
         </h3>
          <p>{movie.revenue !=null && movie.revenue ? formatCurrency(movie.revenue): "Not Found"}</p>
        </div>
        <div className="info">
          <h3>
            <BsHourglassSplit/> Duration:
         </h3>
        <p>{movie.runtime} min</p>
        </div>
        <div className="info-description">
          <h3>
            <BsFillFileEarmarkTextFill/> Descripition:
         </h3>
        <p>{movie.overview}</p>
        </div>
        </>
      }
      
    </div>
  )
}

export default Movie