import { NavLink } from 'react-router-dom'
import { PiRankingLight, PiShootingStar, PiCalendar} from "react-icons/pi";

const Categories = () => {

    return (
        <>
            <div className='md:flex md:justify-center grid grid-cols-2 grid-rows-2 gap-2 p-5'>

                <NavLink 
                    to='/' 
                    id="top_rated" 
                    className={({ isActive}) => 
                        isActive ? "p-3 rounded-lg shadow-lg h-12 md:h-full w-full md:w-1/4 bg-rose-950 text-white flex justify-between items-center text-sm" 
                        : 
                        "p-3 rounded-lg shadow-lg h-12 md:h-full w-full md:w-1/4 flex justify-between items-center hover:bg-rose-950 bg-rose-900 text-white duration-200 text-sm"
                    }> 
                    Top rated
                    <PiRankingLight size={20} fill="white"/>
                </NavLink>

                <NavLink 
                    to='/popular' 
                    id="popular" 
                    className={({ isActive}) => 
                        isActive ? "p-3 rounded-lg shadow-lg h-12 md:h-full w-full md:w-1/4 bg-rose-950 text-white flex justify-between items-center text-sm" 
                        : 
                        "p-3 rounded-lg shadow-lg h-12 md:h-full w-full md:w-1/4 flex justify-between items-center hover:bg-rose-950 bg-rose-900 text-white duration-200 text-sm"
                    }> 
                    Popular
                    <PiShootingStar size={20} fill="white"/>
                </NavLink>

                <NavLink 
                    to='/upcoming' 
                    id="upcoming" 
                    className={({ isActive}) => 
                        isActive ? "p-3 rounded-lg shadow-lg h-12 md:h-full w-full md:w-1/4 bg-rose-950 text-white flex justify-between items-center text-sm" 
                        : 
                        "p-3 rounded-lg shadow-lg h-12 md:h-full w-full md:w-1/4 flex justify-between items-center hover:bg-rose-950 bg-rose-900 text-white duration-200 text-sm"
                    }> 
                    Upcoming
                    <PiCalendar size={20} fill="white"/>
                </NavLink>

                <NavLink 
                    to='/api' 
                    id="API" 
                    className={({ isActive}) => 
                        isActive ? "p-3 rounded-lg shadow-lg h-12 md:h-full w-full md:w-1/4 bg-rose-950 text-white flex justify-between items-center text-sm" 
                        : 
                        "p-3 rounded-lg shadow-lg h-12 md:h-full w-full md:w-1/4 flex justify-between items-center hover:bg-rose-950 bg-rose-900 text-white duration-200 text-sm"
                    }> 
                    API
                </NavLink>

            </div>

        </>
    )
}

export default Categories