import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ModeContextProvider } from './context/ModeContext.tsx'
import { CategoryContextProvider } from './context/CategoryContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <ModeContextProvider>
    <CategoryContextProvider>
      <App />
    </CategoryContextProvider>
  </ModeContextProvider>

)
