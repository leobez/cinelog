import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MovieContext, { MovieContextType } from '../../context/MovieContext'
import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {

    const [query, setQuery] = useState<string|null>(null)
    const navigate = useNavigate()

    const {updateMessage} = useContext(MovieContext) as MovieContextType

    const handleSubmit = (e:any):void => {
        e.preventDefault()
        if (!query || query.length === 0) {
            updateMessage('Invalid query', 'orange')            
            return;
        }
        return navigate(`/search?q=${query}`)
    }

    return (
        <form className="flex justify-center items-center h-1/2 w-full" onSubmit={handleSubmit}>

            <div className="w-10 h-10">
                <button type="submit" className="h-full w-full cursor-pointer bg-white rounded-l-lg outline-none border-rose-950 border-y-2 border-l-2 grid place-items-center">
                    <FaSearch size={20} fill="black"/>
                </button>
            </div>

            <div className="flex-grow h-10 items-center justify-center">
                <input type="text" name="searchQuery" id="searchQuery" className="bg-white outline-none border-rose-950 border-y-2 border-r-2 h-10 w-full px-1 rounded-r-lg" onChange={(e:any) => setQuery(e.target.value)}/>
            </div>

        </form>
    )

}

export default Searchbar