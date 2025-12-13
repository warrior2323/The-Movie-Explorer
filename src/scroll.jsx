import { useEffect , useState} from "react";
import {useRef} from "react";
import {MdChevronLeft , MdChevronRight} from "react-icons/md"
import { useNavigate } from "react-router-dom"
import MovieRow from "./movierow"

export default function Scroll(){
const sliderRef=useRef(null);
const navigate=useNavigate();
const [shows,setShows] = useState([])
const [populerposter,setPopulerPoster]=useState([])
const [thrillerMovie,setThrillerMovie]=useState([])
const [thrillerMoviePoster,setThrillerMoviePoster]=useState([])
const [actionMovie,setActionMovie] = useState([])
const [actionMoviePoster,setActionMoviePoster] = useState([])






useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/popular?api_key='paste your api key here`)
    .then(response => response.json())
    .then(data => {
        setShows(shows=> data.results)

    })
    .catch(error => console.error('Error:',error));},[] )  

useEffect(()=>{fetch(`https://api.themoviedb.org/3/discover/movie?api_key='paste your api key here'&with_genres=53`)
    .then(response => response.json())
    .then(data => {
        setThrillerMovie(thrillerMovie => data.results)

    })
    .catch(error => console.error('Error:',error));},[] )  

useEffect(()=>{fetch(`https://api.themoviedb.org/3/discover/movie?api_key='paste your api key here'&with_genres=53`)
    .then(response => response.json())
    .then(data => {
        setActionMovie(actionMovie => data.results)

    })
    .catch(error => console.error('Error:',error));},[] )  

useEffect(()=>{fetch(`https://api.themoviedb.org/3/discover/movie?api_key='paste your api key here'&with_genres=28`)
    .then(response => response.json())
    .then(data => {
        setThrillerMovie(thrillerMovie => data.results)

    })
    .catch(error => console.error('Error:',error));},[] )  
function handleClick(value){
    
    navigate(`/about/${value.id}`,{
        state:{
            movieData:value
        }
    })
}

useEffect(()=>{setPopulerPoster(shows.map(value => <img key={value.id} onClick={()=>{handleClick(value)} } className="posters w-[200px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 border-radius-10px" src = {`https://image.tmdb.org/t/p/original${value.poster_path}`} id="trending"/>));},[shows])
useEffect(()=>{setThrillerMoviePoster(thrillerMovie.map(value => <img key={value.id} onClick={()=>{handleClick(value)} }className="posters w-[200px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 border-radius-10px" src = {`https://image.tmdb.org/t/p/original${value.poster_path}`} id="trending"/>));},[thrillerMovie])
useEffect(()=>{setActionMoviePoster(actionMovie.map(value => <img key={value.id} onClick={()=>{handleClick(value)} }className="posters w-[200px] h-[200px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 border-radius-10px" src = {`https://image.tmdb.org/t/p/original${value.poster_path}`} id="trending"/>));},[actionMovie])


if (shows.length===0 ) return <div>Loading .....</div>

return(
    <div className="mt-110 flex-col gap-20px">
    <MovieRow title="Trending Now" poster={populerposter}/>
    
    <MovieRow title="Thriller Movies" poster={thrillerMoviePoster}/>

    <MovieRow title="Action Movies" poster={actionMoviePoster}/>
    



    </div>
)
}
