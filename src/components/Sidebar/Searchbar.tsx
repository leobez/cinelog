import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {

    const [query, setQuery] = useState<string|null>(null)
    const navigate = useNavigate()

    const handleSubmit = (e:any):void => {
        e.preventDefault()
        return navigate(`/search?q=${query}`)
    }

    return (
        <form className="flex gap-1 justify-center items-center h-1/2 w-full" onSubmit={handleSubmit}>
            
            <div>
                <p>Search:</p>
            </div>

            <div className="flex-grow h-10 items-center justify-center">
                <input type="text" name="searchQuery" id="searchQuery" className="bg-white border-2 border-color05 h-10 w-full px-1" onChange={(e:any) => setQuery(e.target.value)}/>
            </div>

            <div className="w-10 h-10">
                <input type="submit" value="P" className="border-2 border-color05 h-full w-full hover:bg-color05 hover:text-white cursor-pointer" />
            </div>

        </form>
    )

}

export default Searchbar