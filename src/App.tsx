import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './components/Categories'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import Random from './pages/Random'
import Movie from './pages/Movie'
import Sidebar from './components/Sidebar'
import MovieListContext, { MovieListContextType } from './context/MovieListContext'
import { useContext } from 'react'

function App() {

    const {updatePage} = useContext(MovieListContext) as MovieListContextType

    // Gets more movies after reached bottom of scroll space
    const handleScroll = (e:any):void => {
        const ElementToCalc = e.target
        const bottom = ElementToCalc.scrollHeight - ElementToCalc.scrollTop === ElementToCalc.clientHeight;
        if (bottom) { 
          updatePage()
        }
    }

    return (
      <div className='h-screen flex flex-col pb-2 gap-2'>
        
          <header className='h-18 p-4 flex justify-between align-middle bg-color05 relative'>
            <Header/>
          </header>

          <main className='flex justify-center h-full overflow-y-auto'>
            
            {/* WRAPPER */}
            <div className='max-w-[900px] w-[900px] min-w-[900px] flex gap-2 h-fit'>

              {/* SIDE-BAR */}
              <div className='w-40 h-full top-0 sticky border-black border-2'>
                <Sidebar/>
              </div>

              {/* ROUTES CONTENT */}
              <BrowserRouter>
                
                {/* CONTENT */}
                <div className='flex-grow flex flex-col gap-2'>

                  <div className='border-2 border-black sticky top-0 bg-white z-10'>
                    <Categories/>
                  </div>

                  <Routes>
                    <Route path='*' element={<div>404</div>}></Route>
                    <Route path='/' element={<Home/>}></Route> 
                    <Route path='/popular' element={<Popular/>}></Route>
                    <Route path='/upcoming' element={<Upcoming/>}></Route>
                    <Route path='/random' element={<Random/>}></Route>
                    <Route path='/movie/:id' element={<Movie/>}></Route>
                    <Route path='/search' element={<Home/>}></Route>
                    <Route path='/filter' element={<Home/>}></Route>
                  </Routes> 

                </div>

              </BrowserRouter>    

            </div>

          </main>
        
      </div>
    )
}

export default App
