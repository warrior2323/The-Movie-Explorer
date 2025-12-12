import { useNavigate } from "react-router-dom"
export default function Navbar(){
    const navigate=useNavigate()
    return(
        <section className="navbar">
        <nav className="leftnav">
            <span>NETFLIX</span>
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
        <nav className="rightnav">
            <button className="navbutton">Search</button>
            <button className="navbutton">Notifications</button>
            
        </nav>
        </section>


    )
}