import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModeContextProvider } from './context/ModeContext.tsx'
/* import { CategoryContextProvider } from './context/CategoryContext.tsx'
 */import { MovieListContextProvider } from './context/MovieListContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <ModeContextProvider>
    <MovieListContextProvider>
      <App />
    </MovieListContextProvider>
  </ModeContextProvider>

)
