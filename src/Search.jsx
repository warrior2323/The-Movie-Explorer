import { useLocation , useNavigate } from "react-router-dom";
import {useEffect , useState} from 'react'
import Navbar from "./Navbar"
export default function Search(){
    const location=useLocation();
    const navigate=useNavigate();
    const title =location.state.movieTitle
    const [movieData, setMovieData]=useState([]);
    const [moviePoster,setMoviePoster]=useState([])



    useEffect(()=>{fetch(`https://api.themoviedb.org/3/search/movie?api_key=eea241ecf85381fca961655918e8348a&query=${title}`)
    .then(response => response.json())
    .then(data => {
        setMovieData(movieData => data.results)

    })
    .catch(error => console.error('Error:',error));},[title] )  
function handleClick(value){
    
    navigate(`/about/${value.id}`,{
        state:{
            movieData:value
        }
    })
}
   document.body.style.backgroundColor="black";
   useEffect(()=>{setMoviePoster(moviePoster=> movieData.map(value => <img key={value.id} onClick={()=>{handleClick(value)} }  className="posters w-[200px] h-[200px] ml-5 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 border-radius-10px" src = {`https://image.tmdb.org/t/p/original${value.poster_path}`} id="trending"/>))
   },[movieData]);

   return(< div className="min-h-screen bg-black text-white">
    <Navbar/>
    <h1 className="mt-15 mb-10 ml-5 text-[20px]">Searched results for {title}</h1>
    {moviePoster}
    </div>
   )
    
}
   