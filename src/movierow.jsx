import {useRef} from "react";
import {MdChevronLeft , MdChevronRight} from "react-icons/md"
import { useNavigate } from "react-router-dom"

export default function MovieRow({title,poster}){
const sliderRef=useRef(null);
const navigate=useNavigate();

const sliderLeft=()=>{

    sliderRef.current.scrollLeft=sliderRef.current.scrollLeft-500;
}

const sliderRight=()=>{

    sliderRef.current.scrollLeft=sliderRef.current.scrollLeft+500;
}


return(
    <div>
    <h1 className="ml-12 text-white font-bold text-[20px] ">{title}</h1>
    <section className="relative flex items-center">
    <MdChevronLeft size={40} onClick={sliderLeft} className="opacity-50 cursor-pointer hover:opacity-100 text-white"/>
        <div ref={sliderRef} className="slider w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide" >
            {poster}
        </div>
    <MdChevronRight  size={40} onClick={sliderRight} className="opacity-50 cursor-pointer hover:opacity-100 text-white"/>
    </section>
    </div>
)

}