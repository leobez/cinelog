import { NavLink } from 'react-router-dom'

const Categories = () => {

    return (
        <>
            <div role="tablist" className="tabs tabs-bordered p-2">

                <NavLink 
                    to='/' 
                    id="top_rated" 
                    className={({ isActive, isPending }) => isPending ? "tab text-xs md:text-lg p-0" : isActive ? "tab font-bold text-color03 text-md md:text-lg p-0" : "tab hover:text-color03"}> 
                    Top rated
                </NavLink>

                <NavLink 
                    to='/popular' 
                    id="popular" 
                    className={({ isActive, isPending }) => isPending ? "tab text-xs md:text-lg p-0" : isActive ? "tab font-bold text-color03 text-md md:text-lg p-0" : "tab hover:text-color03"}> 
                    Popular
                </NavLink>

                <NavLink 
                    to='/upcoming' 
                    id="upcoming" 
                    className={({ isActive, isPending }) => isPending ? "tab text-xs md:text-lg p-0" : isActive ? "tab font-bold text-color03 text-md md:text-lg p-0" : "tab hover:text-color03"}> 
                    Upcoming
                </NavLink>

            </div>

        </>
    )
}

export default Categories