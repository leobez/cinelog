import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './components/Categories'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import Random from './pages/Random'
import Movie from './pages/Movie'
import Sidebar from './components/Sidebar/Sidebar'
import Search from './pages/Search'
import ByGenre from './pages/ByGenre'

function App() {

    return (
      <div className='h-screen flex flex-col pb-2 gap-2'>
        
          <header className='h-18 p-4 flex justify-between align-middle bg-color05 relative'>
            <Header/>
          </header>

          <main className='flex justify-center h-full overflow-y-auto'>
            
            {/* WRAPPER */}
            <div className='w-[1000px] flex gap-2 h-fit'>

              {/* ROUTES CONTENT */}
              <BrowserRouter>

                {/* SIDE-BAR */}
                <div className='w-4/12 top-0 sticky h-screen border-black border-2'>
                  <Sidebar/>
                </div>

                {/* CONTENT */}
                <div className='w-8/12 flex flex-col gap-2'>

                  <div className='border-2 border-black sticky top-0 bg-white z-10'>
                    <Categories/>
                  </div>

                  <Routes>
                    <Route path='*' element={<div>404</div>}></Route>
                    <Route path='/' element={<Home/>}></Route> 
                    <Route path='/popular' element={<Popular/>}></Route>
                    <Route path='/upcoming' element={<Upcoming/>}></Route>
                    <Route path='/search' element={<Search/>}></Route>
                    <Route path='/bygenre' element={<ByGenre/>}></Route> 
                    <Route path='/movie/:id' element={<Movie/>}></Route>
                  </Routes> 

                </div>

              </BrowserRouter>    

            </div>

          </main>
        
      </div>
    )
}

export default App
