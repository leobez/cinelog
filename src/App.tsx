import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { ModeContextProvider } from './context/ModeContext'
import Footer from './components/Footer'

function App() {

  return (
    <>  

      {/*
      <div className='h-[100vh] w-[100vw] bg-slate-500 absolute animate-in slide-out-to-right-'>

      </div>  
      */}

      <div className='h-screen flex flex-col'>

        <ModeContextProvider>

          <header className='flex-none h-24 p-4 border-b-2 border-color01 flex justify-between align-middle bg-color02'>
            <Header/>
          </header>

          <BrowserRouter>

            <div className='flex-grow bg-slate-200 flex gap-1 overflow-y-hidden'>

              <nav className='max-h-full w-52 bg-slate-100 p-2 overflow-y-auto'>
                <ul>
                  <li className='h-24'>
                    LINK
                  </li>
                  <li className='h-24'>
                    LINK
                  </li>
                  <li className='h-24'>
                    LINK
                  </li>
                </ul>
              </nav>

              <main className='max-h-full flex-grow bg-slate-100 p-2 overflow-y-auto'>
                <Routes>
                  <Route path='*' element={<div>404</div>}></Route>
                  <Route path='/' element={<Home/>}></Route>
                </Routes>            
              </main>

            </div>

          </BrowserRouter>
          
          <footer className='flex-none h-24 border-t-2 border-black p-4 grid place-items-center text-xl font-bold'>
            <Footer/>
          </footer>

        </ModeContextProvider>

      </div>
    </>

  )
}

export default App
