import { useLocation } from "react-router-dom"
import Navbar from "./Navbar"
export default function About(){
    const location =useLocation();

    const data=location.state.movieData;
    document.body.style.backgroundImage=`url("https://image.tmdb.org/t/p/original${data.backdrop_path}")`

    return(<>
    <Navbar/>
    <section  className="mt-90 text-white ml-20 "
 
   >
        <h1 className="text-[50px] font-bold font-Bebas Neue">{data.title}</h1>
        <p className="max-w-170">{data.overview}</p>
        <span>{data.release_date}</span>
        <p>{data.vote_average}</p>
    </section>

        </>
    )
}