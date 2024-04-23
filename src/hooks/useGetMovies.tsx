import { useEffect, useState } from "react"

export const useGetMovies = (category:string) => {

    const [list, setList] = useState<any>([])
    useEffect(() => {console.log('list: ', list)}, [list])

    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [hasMore, setHasMore] = useState<boolean>(true)

    const updatePage = () => {
        setPage((prev) => prev+1)
    }

    useEffect(() => {

        // Get top rated movies
        const getTopRatedMovies = async() => {

            try {
                setLoading(true)
                const URL = `${import.meta.env.VITE_TOP_RATED_MOVIES_URL}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`
                const result = await fetch(URL)
                const data = await result.json()

                // Last page reached
                if (data.results.length === 0) {
                    setLoading(false)
                    setHasMore(false)
                    return;
                }
                
                // First call
                if (list.length === 0) {
                    setList(data.results)
                } else {
                    setList((prev:any) => {
                        return [...prev, ...data.results]
                    })
                }
                
                console.log(data)
                console.log(data.results)

                setLoading(false)

            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }


        // Get popular movies
        const getPopularMovies = () => {

        }


        // Get upcoming movies
        const getUpcomingMovies = () => {

        }   


        if (category === 'top_rated') getTopRatedMovies()


    }, [category, page])

    return {
        loading, 
        list,
        updatePage,
        hasMore
    }
}