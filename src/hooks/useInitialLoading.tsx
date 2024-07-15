import {useState, useEffect} from 'react'

export const useInitialLoading = (list:any[]) => {

    const [initialLoading, setInitialLoading] = useState(true) 

    useEffect(() => {
        
        // Garantees this effect wont run after initialLoading has ended
        if (!initialLoading) {
            return;
        }
        
        // If list hasnt loaded yet, do nothing, because its only gonna change when list has actually loaded
        if (list.length === 0) {
            return;
        } 

        // If it got here, then list finished loading so initial loading can stop
        setInitialLoading(false)

    }, [list, initialLoading])

	return {
        initialLoading
    }
}
