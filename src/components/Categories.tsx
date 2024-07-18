import { NavLink } from 'react-router-dom'

const Categories = () => {

    return (
        <>
            <div role="tablist" className="tabs tabs-bordered p-2">

                <NavLink 
                    to='/' 
                    id="top_rated" 
                    className={({ isActive, isPending }) => isPending ? "tab text-xs md:text-lg p-0 h-fit" : isActive ? "tab font-bold text-color03 text-md md:text-lg p-0 h-fit" : "tab hover:text-color03 h-fit"}> 
                    Top rated
                </NavLink>

                <NavLink 
                    to='/popular' 
                    id="popular" 
                    className={({ isActive, isPending }) => isPending ? "tab text-xs md:text-lg p-0 h-fit" : isActive ? "tab font-bold text-color03 text-md md:text-lg p-0 h-fit" : "tab hover:text-color03 h-fit"}> 
                    Popular
                </NavLink>

                <NavLink 
                    to='/upcoming' 
                    id="upcoming" 
                    className={({ isActive, isPending }) => isPending ? "tab text-xs md:text-lg p-0 h-fit" : isActive ? "tab font-bold text-color03 text-md md:text-lg p-0 h-fit" : "tab hover:text-color03 h-fit"}> 
                    Upcoming
                </NavLink>

                <NavLink 
                    to='/api' 
                    id="API" 
                    className={({ isActive, isPending }) => isPending ? "tab text-xs md:text-lg p-0 h-fit" : isActive ? "tab font-bold text-color03 text-md md:text-lg p-0 h-fit" : "tab hover:text-color03 h-fit"}> 
                    API
                </NavLink>

            </div>

        </>
    )
}

export default Categories