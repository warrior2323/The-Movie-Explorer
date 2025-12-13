import { useNavigate } from "react-router-dom"
import { useState , useRef } from "react"
import logo from "./Netflix_Logo_RGB.png";
export default function Navbar(){
    const navigate=useNavigate()
    const [isSearchOpen,setIsSearchOpen]=useState(false);
    const searchInputRef = useRef(null);

    const search =function(){
        setIsSearchOpen(true);
        setTimeout(()=>{
        searchInputRef.current?.focus()
        },50)

    }
    
    const handleBlur=()=>{
        setTimeout(()=>{
            setIsSearchOpen(false)},200)
        ;
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const value=searchInputRef.current?.value;
        navigate('/search',{
            state:{
                movieTitle:value
            }
        })
    }

    return(
        <section className="navbar">
        <nav className="leftnav">
            <img src={logo} className="w-35"/>
            <button className="navbutton" onClick={()=> {
                navigate('/')
            }}>Home
            </button>
            <button className="navbutton">TV Shows
            </button>
            <button className="navbutton">Movies
            </button>
            <button className="navbutton">Recently Added
            </button>
            <button className="navbutton">My List
            </button>
        </nav>
        <nav className="rightnav mr-20">
            <form onSubmit={handleSubmit}>
            <input ref={searchInputRef} onBlur={handleBlur} type="text" id="search-bar" placeholder="Type to search..." className={`bg-white text-black h-8 pl-5 rounded-full py-0 border-none ${isSearchOpen ? 'block' : 'hidden'} placeholder:text-[20px] placeholder: italic placeholder:text-black placeholder:pl-5 placeholder:pb-2`} ></input>
            </form>
            <button className={`navbutton ${isSearchOpen ? 'hidden' : "block"} ` }onclick={search} id="search" onClick={search}>Search</button>
            <button className="navbutton">Notifications</button>
            
        </nav>
        </section>


    )
}