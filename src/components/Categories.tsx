import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import MovieContext, { MovieContextType } from '../context/MovieContext'

const Categories = () => {

    const {updateCategory} = useContext(MovieContext) as MovieContextType

    const handleClick = (e:any):void => {
        updateCategory(e.target.id)
    }

    return (
        <>
            <div role="tablist" className="tabs tabs-bordered p-2">

                <NavLink to='/' id="top_rated" className={({ isActive, isPending }) => isPending ? "tab text-md" : isActive ? "tab text-md font-bold text-color03" : "tab text-md"} onClick={handleClick}> Top rated</NavLink>

                <NavLink to='/popular' id="popular" className={({ isActive, isPending }) => isPending ? "tab text-md" : isActive ? "tab text-md font-bold text-color03" : "tab text-md"} onClick={handleClick}> Popular</NavLink>

                <NavLink to='/upcoming' id="upcoming" className={({ isActive, isPending }) => isPending ? "tab text-md" : isActive ? "tab text-md font-bold text-color03" : "tab text-md"} onClick={handleClick}> Upcoming</NavLink>

            </div>

        </>
    )
}

export default Categories