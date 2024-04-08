import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { ModeContextProvider } from './context/ModeContext'

function App() {

  return (
    <>  

{/*       <div className='h-[100vh] w-[100vw] bg-slate-500 absolute animate-in slide-out-to-right-'>

      </div>  */}
 
      <ModeContextProvider>
        <Header/>

        <BrowserRouter>

          <div className='flex gap-1'>

            <nav>
              <ul className="menu bg-base-200 w-56 rounded-box">
                <li>
                  <NavLink to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    Home
                  </NavLink>
                </li>
              </ul>
            </nav>

            <main>
              <Routes>
                <Route path='*' element={<div>404</div>}></Route>
                <Route path='/' element={<Home/>}></Route>
              </Routes>
            </main>

          </div>

        </BrowserRouter>
        
        <footer>
          Footer
        </footer>

      </ModeContextProvider>

    </>

  )
}

export default App
