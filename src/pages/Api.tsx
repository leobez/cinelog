import { useContext, useState } from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'
import { useNavigate } from 'react-router-dom'

const Api = () => {

    const [apiKey, setApiKey] = useState<string>('')

    const {updateApiKey, updateMessage} = useContext(MovieContext) as MovieContextType 

    const navigate = useNavigate()

    const handleSave = (e:any):void => {
        e.preventDefault()
        if (!apiKey.length) {
            updateMessage("No API key added", 'orange')
            return;
        }
        updateApiKey(apiKey)
        navigate('/')
    }

    const handleRemove = (e:any):void => {
        e.preventDefault()
        updateApiKey('')
        localStorage.removeItem('tmdbApiKey')
        updateMessage('Api key was removed from local storage', 'green')
    }

    return (
        <div className='bg-rose-700 p-5 rounded-lg shadow-lg'>
            <form className='flex flex-col gap-3 text-left text-sm'>
                <div className='text-white text-sm'>
                    The Api Key will be saved on local storage.
                </div>
                <div className='text-white text-sm'>
                    Link to get an Api Key: 
                    <a href="https://developer.themoviedb.org/v4/reference/intro/getting-started" target='_blank' className="text-rose-300 hover:text-rose-500 duration-200">
                        TMDB Get an API Key.
                    </a>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="api_key" className='text-left text-white text-sm'>Enter the key here to use this app: </label>
                    <input type="text" name="api_key" id="api_key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} className='bg-white outline-none shadow-lg rounded-lg px-2 py-2'/>
                </div>
                <div className='flex gap-2 justify-center w-1/2'>
                    <button onClick={handleSave} className="p-3 text-sm w-1/2 bg-rose-900 hover:bg-rose-950 text-white cursor-pointer rounded-lg shadow-lg">Save it</button>
                    <button onClick={handleRemove} className="p-3 text-sm w-1/2 bg-rose-900 hover:bg-rose-950 text-white cursor-pointer rounded-lg shadow-lg">Clear it</button>
                </div>
            </form>
        </div>
    )
}

export default Api