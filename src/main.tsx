import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MovieListContextProvider } from './context/MovieContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

    <MovieListContextProvider>
      <App />
    </MovieListContextProvider>

)
