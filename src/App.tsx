import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Categories from './components/Categories'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import Random from './pages/Random'

function App() {


    return (
      <>  
        <div className='h-screen flex flex-col'>
          
            <header className='flex-none h-16 p-4 flex justify-between align-middle bg-color05'>
              <Header/>
            </header>

            <BrowserRouter>

              <div className='flex-grow flex gap-1 bg-slate-200 overflow-y-hidden m-auto shadow-lg w-full justify-center'>

                <div className='max-h-full w-44 bg-white border-x-2 border-color05 p-2 overflow-y-scroll scrollbar-thin'>
                    {/* Search bar */}
                    {/* Filter */}
                </div>

                <main className='max-w-[1000px] max-h-full flex-grow bg-white p-2 overflow-y-hidden'>

                  {/* NavBar for categories: top_rated, popular, upcoming */}
                  <div>
                    <Categories/>
                  </div>

                  <Routes>
                    <Route path='*'           element={<div>404</div>}></Route>
                    <Route path='/'           element={<Home/>}></Route> {/* top_rated */}
                    <Route path='/popular'    element={<Popular/>}></Route>
                    <Route path='/upcoming'   element={<Upcoming/>}></Route>
                    <Route path='/random'     element={<Random/>}></Route>
                    <Route path='/search'     element={<Home/>}></Route>
                    <Route path='/filter'     element={<Home/>}></Route>
                  </Routes>   

                </main>

              </div>

            </BrowserRouter>
            
            <footer className='flex-none h-16 p-4 grid place-items-center bg-color05'>
              <Footer/>
            </footer>

        </div>
      </>

    )
}

export default App
