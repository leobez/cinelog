import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
import HiddenSidebar from './components/Sidebar/HiddenSidebar'
import HiddenMenuButton from './components/HiddenMenuButton'
import Random from './pages/Random'
import { toggleComponent } from './utils/toggleComponent'
import Api from './pages/Api'
import MovieContext, { MovieContextType } from './context/MovieContext'

function App() {

    const hiddenMenu:any = useRef()

    const {apiKey} = useContext(MovieContext) as MovieContextType 

    return (
      <div className='h-screen flex flex-col gap-1 pb-1 bg-rose-600'>
        
          <header className='h-24 p-4 flex align-middle bg-rose-950 relative gap-5'>
            {/* HIDDEN BUTTON  */}
            <HiddenMenuButton func={() => toggleComponent(hiddenMenu)}/>
            <Header/>
          </header>

          <main className='flex justify-center h-full overflow-y-auto'>
            
            {/* WRAPPER */}
            <div className='w-full lg:w-[1000px] flex gap-1 h-fit justify-center'>

              {/* ROUTES CONTENT */}
              <BrowserRouter>

                {/* SIDE-BAR */}
                <div className='h-fit min-h-screen w-4/12 top-0 sticky p-3 hidden lg:block bg-rose-900 rounded-lg shadow-lg'>
                  <Sidebar/>
                </div>

                {/* HIDDEN SIDEBAR */}
                <div className='h-[600px] pb-2 w-[310px] border-black border-2 z-30 fixed left-0 bg-white mt-[-8px] hidden lg:hidden animate-in slide-in-from-left-full duration-200 overflow-y-auto' ref={hiddenMenu}>
                  <HiddenSidebar/>
                </div>
              
                {/* CONTENT */}
                <div className='lg:w-8/12 w-11/12 min-h-screen flex flex-col gap-2 items-center bg-rose-900 p-3 shadow-lg rounded-lg'>

                  <div className='shadow-md sticky top-0 bg-white z-10 w-full'>
                    <Categories/>
                  </div>

                  <div className='w-full h-full'>
                    <Routes>
                      <Route path='*'           element={<div>404</div>}></Route>
                      <Route path='/'           element={apiKey.length ? <Home/>:<Navigate to='/api'/>}></Route> 
                      <Route path='/api'        element={<Api/>}></Route> 
                      <Route path='/popular'    element={apiKey.length ? <Popular/>:<Navigate to='/api'/>}></Route>
                      <Route path='/upcoming'   element={apiKey.length ? <Upcoming/>:<Navigate to='/api'/>}></Route>
                      <Route path='/search'     element={apiKey.length ? <Search/>:<Navigate to='/api'/>}></Route>
                      <Route path='/bygenre'    element={apiKey.length ? <ByGenre/>:<Navigate to='/api'/>}></Route> 
                      <Route path='/movie/:id'  element={apiKey.length ? <Movie/>:<Navigate to='/api'/>}></Route>
                      <Route path='/random'     element={apiKey.length ? <Random/>:<Navigate to='/api'/>}></Route>
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
