import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { ModeContextProvider } from './context/ModeContext'
import Footer from './components/Footer'
import Categories from './components/Categories'

function App() {

  return (
    <>  

      <div className='h-screen flex flex-col'>

        <ModeContextProvider>

          <header className='flex-none h-24 p-4 flex justify-between align-middle bg-color05'>
            <Header/>
          </header>

          <BrowserRouter>

            <div className='flex-grow flex gap-1 bg-slate-300 overflow-y-hidden w-9/12 m-auto  shadow-lg'>

              <div className='max-h-full w-44 bg-white border-x-2 border-color05 p-2 overflow-y-scroll scrollbar-thin'>
                <Categories/>
              </div>

              <main className='max-h-full flex-grow bg-white p-2 overflow-y-auto'>
                <Routes>
                  <Route path='*' element={<div>404</div>}></Route>
                  <Route path='/' element={<Home/>}></Route>
                </Routes>            
              </main>

            </div>

          </BrowserRouter>
          
          <footer className='flex-none h-24 p-4 grid place-items-center bg-color05'>
            <Footer/>
          </footer>

        </ModeContextProvider>

      </div>
    </>

  )
}

export default App
