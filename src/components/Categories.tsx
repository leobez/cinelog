import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import MovieListContext, { MovieListContextType } from '../context/MovieListContext'

const Categories = () => {

    const {resetList, resetPage} = useContext(MovieListContext) as MovieListContextType

    const handleClick = ():void => {
        resetList()
        resetPage()
    }

    return (
        <>
            <div role="tablist" className="tabs tabs-bordered p-2">

                <NavLink to='/' id="top_rated" className={({ isActive, isPending }) => isPending ? "tab text-lg" : isActive ? "tab text-lg font-bold text-color03" : "tab text-lg"} onClick={handleClick}> Top rated</NavLink>

                <NavLink to='/popular' id="popular" className={({ isActive, isPending }) => isPending ? "tab text-lg" : isActive ? "tab text-lg font-bold text-color03" : "tab text-lg"} onClick={handleClick}> Popular</NavLink>

                <NavLink to='/upcoming' id="upcoming" className={({ isActive, isPending }) => isPending ? "tab text-lg" : isActive ? "tab text-lg font-bold text-color03" : "tab text-lg"} onClick={handleClick}> Upcoming</NavLink>

            </div>

        </>
    )
}

export default Categories