import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Categories from './components/Categories'
import Popular from './pages/Popular'
import Upcoming from './pages/Upcoming'
import Movie from './pages/Movie'
import Sidebar from './components/Sidebar/Sidebar'
import Search from './pages/Search'
import ByGenre from './pages/ByGenre'
import { useContext, useRef } from 'react'
import MovieContext, { MovieContextType } from './context/MovieContext'

function App() {

    const {loadingRandom} = useContext(MovieContext) as MovieContextType

    const hiddenMenu:any = useRef()
    const overlay:any = useRef()

    const toggleHiddenMenu = (e:any):void => {
      e.preventDefault()
      console.log(hiddenMenu)
      const classNames = hiddenMenu.current.className.split(' ')

      if (classNames.includes('hidden')) {
          // Make it visible
          hiddenMenu.current.classList.remove('hidden')
          hiddenMenu.current.classList.add('block')
          overlay.current.classList.remove('hidden')
          overlay.current.classList.add('block')

      } else if (classNames.includes('block')) {
          // Make it invisible
          hiddenMenu.current.classList.remove('block')
          hiddenMenu.current.classList.add('hidden')
          overlay.current.classList.remove('block')
          overlay.current.classList.add('hidden')
      }
    }

    return (
      <div className='h-screen flex flex-col pb-2 gap-2'>
        
          <header className='h-16 p-4 flex justify-between align-middle bg-color05 relative'>
            <Header/>
          </header>

          <main className='flex justify-center h-full overflow-y-auto'>
            
            {/* WRAPPER */}
            <div className='w-[1000px] flex gap-2 h-fit justify-center'>

              {/* ROUTES CONTENT */}
              <BrowserRouter>

                {/* SIDE-BAR */}
                <div className='w-4/12 top-0 sticky h-screen border-black border-2 hidden lg:block bg-white'>
                  <Sidebar/>
                </div>

                {/* HIDDEN SIDEBAR */}
                <div className='h-screen border-black border-2 z-30 fixed left-0 bg-white mt-[-8px] lg:hidden block pt-[100px] animate-in' ref={hiddenMenu}>

                  <div className='bg-white'>
                    <Categories/>
                  </div>

                  <Sidebar/>

                </div>
              
                {/* HIDDEN BUTTON  */}
                <button className='fixed left-2 z-30 bg-white rounded-full p-4 border-2 border-black flex lg:hidden hover:bg-black flex-col items-center justify-center gap-2 hover:bg-gray-200' onClick={toggleHiddenMenu}>
                  <span className='rounded-md w-8 h-1 bg-black'></span>
                  <span className='rounded-md w-8 h-1 bg-black'></span>
                  <span className='rounded-md w-8 h-1 bg-black'></span>
                </button>
                
                {/* OVERLAY */}
                <div className='h-screen w-screen absolute bg-gray-400 opacity-50 z-20 top-0 right-0 lg:hidden block' ref={overlay}/>

                {/* CONTENT */}
                <div className='lg:w-8/12 w-11/12 flex flex-col gap-2 items-center bg-white px-2 shadow-md'>

                  <div className='border-2 border-black sticky top-0 bg-white z-10 w-full hidden lg:block'>
                    <Categories/>
                  </div>

                  {loadingRandom && 
                    <div className='h-full w-full flex flex-col justify-center items-center gap-4'>
                      <span className="loading loading-spinner loading-lg"></span>
                      <p className='font-bold'>Selecting random movie...</p>
                    </div>
                  }

                  <div className='w-full'>
                    {!loadingRandom && 
                      <Routes>
                        <Route path='*' element={<div>404</div>}></Route>
                        <Route path='/' element={<Home/>}></Route> 
                        <Route path='/popular' element={<Popular/>}></Route>
                        <Route path='/upcoming' element={<Upcoming/>}></Route>
                        <Route path='/search' element={<Search/>}></Route>
                        <Route path='/bygenre' element={<ByGenre/>}></Route> 
                        <Route path='/movie/:id' element={<Movie/>}></Route>
                      </Routes> 
                    }
                  </div>

                </div>

              </BrowserRouter>    

            </div>

          </main>
        
      </div>
    )
}

export default App
