import { useContext, useState } from 'react'
import MovieContext, { MovieContextType } from '../context/MovieContext'

const Api = () => {

    const [apiKey, setApiKey] = useState<string>('')

    const {updateApiKey, updateMessage} = useContext(MovieContext) as MovieContextType 

    const handleSave = (e:any):void => {
        e.preventDefault()
        if (!apiKey.length) {
            updateMessage("No API key added", 'orange')
            return;
        }
        updateApiKey(apiKey)
    }

    const handleRemove = (e:any):void => {
        e.preventDefault()
        updateApiKey('')
        localStorage.removeItem('tmdbApiKey')
        updateMessage('Api key was removed from local storage', 'green')
    }

    return (
        <div>
            <form className='flex flex-col gap-3 text-left'>
                <div>
                    The Api Key will be saved on local storage.
                </div>
                <div>
                    Link to get one: <a href="https://developer.themoviedb.org/v4/reference/intro/getting-started" target='_blank' className='text-purple-800'>TMDB Get an API Key.</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="api_key" className='text-left'>Enter the key here to use this app: </label>
                    <input type="text" name="api_key" id="api_key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} className='bg-white border-2 border-black px-2 py-1'/>
                </div>
                <div className='flex gap-2 justify-center w-1/2'>
                    <button onClick={handleSave} className='p-2 border-black border-2 hover:text-white hover:bg-black w-1/2 min-w-fit'>Save it</button>
                    <button onClick={handleRemove} className='p-2 border-black border-2 hover:text-white hover:bg-black w-1/2 min-w-fit'>Clear it</button>
                </div>
            </form>
        </div>
    )
}

export default Api