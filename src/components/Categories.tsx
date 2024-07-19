import { NavLink } from 'react-router-dom'

const Categories = () => {

    return (
        <>
            <div className='md:h-12 md:flex md:justify-center grid grid-cols-2 grid-rows-2 h-fit'>

                <NavLink 
                    to='/' 
                    id="top_rated" 
                    className={({ isActive}) => isActive ? "h-12 md:h-full w-full md:w-1/4 bg-color03 text-white px-3 py-1 grid place-items-center text-sm" : "h-12 md:h-full w-full md:w-1/4 px-3 py-1 grid place-items-center hover:bg-color03 hover:text-white duration-200 text-sm"}> 
                    Top rated
                </NavLink>

                <NavLink 
                    to='/popular' 
                    id="popular" 
                    className={({ isActive}) => isActive ? "h-12 md:h-full w-full md:w-1/4 bg-color03 text-white px-3 py-1 grid place-items-center text-sm" : "h-12 md:h-full w-full md:w-1/4 px-3 py-1 grid place-items-center hover:bg-color03 hover:text-white duration-200 text-sm"}> 
                    Popular
                </NavLink>

                <NavLink 
                    to='/upcoming' 
                    id="upcoming" 
                    className={({ isActive}) => isActive ? "h-12 md:h-full w-full md:w-1/4 bg-color03 text-white px-3 py-1 grid place-items-center text-sm" : "h-12 md:h-full w-full md:w-1/4 px-3 py-1 grid place-items-center hover:bg-color03 hover:text-white duration-200 text-sm"}> 
                    Upcoming
                </NavLink>

                <NavLink 
                    to='/api' 
                    id="API" 
                    className={({ isActive}) => isActive ? "h-12 md:h-full w-full md:w-1/4 bg-color06 text-white px-3 py-1 grid place-items-center text-sm" : "h-12 md:h-full w-full md:w-1/4 px-3 py-1 grid place-items-center hover:bg-color06 hover:text-white duration-200 text-sm"}> 
                    API
                </NavLink>

            </div>

        </>
    )
}

export default Categories