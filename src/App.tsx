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
import { useRef } from 'react'
import HiddenSidebar from './components/Sidebar/HiddenSidebar'
import HiddenMenuButton from './components/HiddenMenuButton'
import Random from './pages/Random'

function App() {

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
      <div className='h-screen flex flex-col pb-2 gap-2 bg-slate-100'>
        
          <header className='h-24 p-4 flex align-middle bg-color05 relative gap-5'>
            {/* HIDDEN BUTTON  */}
            <HiddenMenuButton func={toggleHiddenMenu}/>
            <Header/>
          </header>

          <main className='flex justify-center h-full overflow-y-auto'>
            
            {/* WRAPPER */}
            <div className='w-full lg:w-[1000px] flex gap-2 h-fit justify-center'>

              {/* ROUTES CONTENT */}
              <BrowserRouter>

                {/* SIDE-BAR */}
                <div className='w-4/12 top-0 sticky h-screen shadow-md p-3 hidden lg:block bg-white'>
                  <Sidebar/>
                </div>

                {/* HIDDEN SIDEBAR */}
                <div className='h-screen w-[310px] border-black border-2 z-30 fixed left-0 bg-white mt-[-8px] hidden overflow-y-auto animate-in slide-in-from-left-full duration-200' ref={hiddenMenu}>
                  <HiddenSidebar/>
                </div>
              

                {/* OVERLAY */}
                <div className='h-screen w-screen absolute bg-gray-400 opacity-50 z-20 top-0 right-0 hidden' ref={overlay}/>

                {/* CONTENT */}
                <div className='lg:w-8/12 w-11/12 flex flex-col gap-2 items-center bg-white p-3 shadow-md'>

                  <div className='shadow-md sticky top-0 bg-white z-10 w-full'>
                    <Categories/>
                  </div>

                  <div className='w-full h-full'>
                    <Routes>
                      <Route path='*'           element={<div>404</div>}></Route>
                      <Route path='/'           element={<Home/>}></Route> 
                      <Route path='/popular'    element={<Popular/>}></Route>
                      <Route path='/upcoming'   element={<Upcoming/>}></Route>
                      <Route path='/search'     element={<Search/>}></Route>
                      <Route path='/bygenre'    element={<ByGenre/>}></Route> 
                      <Route path='/movie/:id'  element={<Movie/>}></Route>
                      <Route path='/random'     element={<Random/>}></Route>
                    </Routes>
                  </div>  

                </div>

              </BrowserRouter>    

            </div>

          </main>
        
      </div>
    )
}

export default App
