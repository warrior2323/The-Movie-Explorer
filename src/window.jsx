import React from "react"

export default function Window(){
const [ show , setShow ]=React.useState([])
const [index , setIndex] = React.useState(0)

React.useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eea241ecf85381fca961655918e8348a`)
    .then(response => response.json())
    .then(data => {
        setShow(data.results);
    })
    .catch(error => console.error('Error:',error));
  },[]) 

React.useEffect(() => {
    if(show.length===0) return;
    const IntervalId=setInterval(()=>{setIndex(prevIndex => (prevIndex+1)%show.length);},7000);
    return () => clearInterval(IntervalId);
},[show])
 
React.useEffect(()=> {if(show && show[index]){document.body.style.backgroundImage=`url("https://image.tmdb.org/t/p/original${show[index].backdrop_path}")`}},[index])

if(show.length===0){
    return <div>Loading...</div>;
}



const currentShow=show[index];

return ( 
    <div className="front-screen">
    <h1 className="title">{currentShow.title}</h1>
    <span> {currentShow.name}</span>
    <p className="overview"> {currentShow.overview}</p>
    <button className="play">Play</button>
    <button className="info">More Info</button>
    </div>        
)
}