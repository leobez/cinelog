import {useState, useEffect} from 'react'

export const useInitialLoadingMovie = (movie:any) => {

    const [initialLoading, setInitialLoading] = useState(true) 

    useEffect(() => {
        
        // Garantees this effect wont run after initialLoading has ended
        if (!initialLoading) {
            return;
        }
        
        // If movie hasnt loaded yet, do nothing, because its only gonna change when list has actually loaded
        if (!movie) {
            return;
        } 

        // If it got here, then list finished loadingm so initial loading can stop
        setInitialLoading(false)

    }, [movie, initialLoading])

	return {
        initialLoading
    }
}
