import { useContext, useEffect, useRef, useState } from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import Button from "../components/Button";
import Loading from "../components/Loading";
import { useInitialLoading } from "../hooks/useInitialLoading";
import Order from "../components/Order";

const Home = () => {

    const {
        updateCategory, 
        GET_movies_toprated, 
        updatePage:updatePageC, 
        page, 
        loading, 
        list, 
        run, 
        updateWarning,
        resetStates,
        updateOrder
    } = useContext(MovieContext) as MovieContextType
    
    const isInitialMount = useRef(true);

    const [order, setOrder] = useState<string|null>(null)
    const [ascdesc, setAscdesc] = useState<string|null>(null)

    // UPDATE CATEGORY -> RESETS LIST AND PAGE.
    useEffect(() => {
      updateCategory('top_rated')
    }, [])

    // Initial loading
    const {initialLoading} = useInitialLoading(list)

    useEffect(() => {
      console.log('ativou effect')

      // Only run this effect if page has actually changed
      if (isInitialMount.current) {
        console.log('blocked: ref')
        isInitialMount.current = false
        return;
      } 
      if (!page) {
        console.log('blocked: page')
        return;
      } 

      console.log('running ASYNC_GET_movies_toprated')
      const ASYNC_GET_movies_toprated = async() => {
        await GET_movies_toprated()
      }
  
      ASYNC_GET_movies_toprated()

    }, [run])

    const updatePage = () => {
      updatePageC()
    }

    const handleOrder = (e:any) => {
      e.preventDefault()

      resetStates()

      if (!order || !order.length) {
        updateWarning('Order invalid')
        return;
      }
      if (!ascdesc || !ascdesc.length) {
        updateWarning('Ascdesc invalid')
        return;
      }

      console.log('order and ascdesc: ', order, ascdesc)
      updateOrder(order, ascdesc)
    }

    const orderByRef:any = useRef<HTMLDivElement>()
    const toggleOrderBy = () => {
        const classNames = orderByRef.current.className.split(' ')
        if (classNames.includes('hidden')) {
            // Make it visible
            orderByRef.current.classList.remove('hidden')
            orderByRef.current.classList.add('block')

        } else if (classNames.includes('block')) {
            // Make it invisible
            orderByRef.current.classList.remove('block')
            orderByRef.current.classList.add('hidden')
        }
    }

    if (initialLoading) {
      console.log('initial loading...')
      return (
        <Loading message="Initial loading ..."/>
      )
    } 

    return (
      <>
        <div className="flex justify-between w-full py-3 px-2 mt-14 lg:mt-0">

          {/* TITLE */}
          <div className="text-lg text-left">
            Top Rated Movies
          </div>

          {/* ORDER */}
          <div className="w-fit">
            <button onClick={toggleOrderBy} className="border-black border-2 h-full w-28 py-2 hover:bg-black hover:text-white">
              Order by
            </button>
            <div className="relative">
              <div ref={orderByRef} className="h-fit w-44 mt-[0.5px] right-0 block top-0 border-2 border-color05 p-2 text-left animate-in slide-in-from-top-5 duration-400 absolute z-40 bg-white overflow-y-auto scrollbar-thin">
                <Order func={handleOrder} func2={setOrder} func3={setAscdesc}/>
              </div> 
            </div>
          </div>

        </div>

        <div className='h-[1px] border-black border w-full mb-5'/>

        {list && list.length > 0 && <MovieList movieList={list}/>}

        {loading && <Loading message="Loading ..."/>}

        <div className="my-4 mr-2 flex justify-end text-sm">
          <Button text={'Load more +'} loading={loading} func={updatePage}/>
        </div>
      </>
    )
}

export default Home