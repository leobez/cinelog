import { NavLink } from 'react-router-dom'

const Categories = () => {

    return (
        <>
            <div role="tablist" className="tabs tabs-bordered p-2">
                <NavLink to='/' id="top_rated" className={({ isActive, isPending }) => isPending ? "tab text-lg" : isActive ? "tab text-lg font-bold text-color03" : "tab text-lg"}> Top rated</NavLink>
                <NavLink to='/popular' id="popular" className={({ isActive, isPending }) => isPending ? "tab text-lg" : isActive ? "tab text-lg font-bold text-color03" : "tab text-lg"}> Popular</NavLink>
                <NavLink to='/upcoming' id="upcoming" className={({ isActive, isPending }) => isPending ? "tab text-lg" : isActive ? "tab text-lg font-bold text-color03" : "tab text-lg"}> Upcoming</NavLink>
            </div>

        </>
    )
}

export default Categories