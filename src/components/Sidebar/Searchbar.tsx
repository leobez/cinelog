import { useContext, useEffect, useState } from 'react'
import MovieContext, { MovieContextType } from '../../context/MovieContext'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Searchbar = (props: Props) => {

    const [query, setQuery] = useState<string|null>(null)
    const navigate = useNavigate()
    //const {updateListCategory, query, updateQuery} = useContext(MovieContext) as MovieContextType

    const handleSubmit = (e:any):void => {
        e.preventDefault()
        return navigate(`/search?q=${query}`)
    }

    return (
        <form className="flex gap-1 justify-center items-center h-1/2 w-full" onSubmit={handleSubmit}>
            
            <div className="flex-grow h-10 items-center justify-center">
                <input type="text" name="searchQuery" id="searchQuery" className="bg-white border-2 border-black h-10 w-full px-1" onChange={(e:any) => setQuery(e.target.value)}/>
            </div>

            <div className="w-10 h-10">
                <input type="submit" value="P" className="border-2 border-black h-full w-full hover:bg-black hover:text-white cursor-pointer" />
            </div>

        </form>
    )

}

export default Searchbar