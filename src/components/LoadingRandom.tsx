import { useContext, useEffect, useRef, useState } from "react"
import ThemeContext, { ThemeContextType } from "../context/ThemeContext"
import Loading from "./Loading"

type Props = {
    message:string
}

const LoadingRandom = ({message}: Props) => {

    const {theme} = useContext(ThemeContext) as ThemeContextType 

    const loadingRef:any = useRef()

    const [order, setOrder] = useState<any>([
        'https://image.tmdb.org/t/p/original//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
        'https://image.tmdb.org/t/p/original//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        'https://image.tmdb.org/t/p/original//2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg',
        'https://image.tmdb.org/t/p/original//hA2ple9q4qnwxp3hKVNhroipsir.jpg',
        'https://image.tmdb.org/t/p/original//k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg',
    ])

    const [count, setCount] = useState<any>(0)

    useEffect(() => {

        const interval = setInterval(() => {
            let currentOrder = order
            setCount((prev:number)=>prev+1)
            const last:any = currentOrder.pop()
            currentOrder.unshift(last)
            setOrder(currentOrder) 
        }, 500) 

       return () => clearInterval(interval)

    }, [])

    return (
        <div className='h-full w-full flex justify-center'>

            <div className="h-fit relative w-full flex flex-col justify-center items-center pt-64 overflow-clip">
                <div className="relative flex transition-transform" ref={loadingRef}>
                    {order && order.map((element:any, index:number) => (
                        <div 
                            className={
                                `
                                    bg-white rounded-lg shadow-lg duration-200 animate-in ease-in-out
                                    ${
                                        index===2 ?     'h-80 w-56              slide-in-from-left-52    translate-x-0 -translate-y-44' 
                                        : index===0 ?   'h-56 w-36 -rotate-45   slide-in-from-right-52     translate-x-full translate-y-1/2' 
                                        : index===1 ?   'h-56 w-36 -rotate-45   slide-in-from-bottom-52    translate-x-1/4 translate-y-0' 
                                        : index===3 ?   'h-56 w-36 rotate-45    slide-in-from-left-52   -translate-x-1/4 translate-y-0' 
                                        : index===4 ?   'h-56 w-36 rotate-45    slide-in-from-left-52   -translate-x-full translate-y-1/2' 
                                        : ''                                       
                                    }
                                `
                            } key={`${element}${index}${count}`}>

                            <img src={element} alt={element} className="object-cover object-top h-full w-full rounded-lg"/>

                        </div>
                    ))}
                </div>
                <div className={`h-48 w-1/2 bg-${theme}-300 absolute bottom-0 z-40 rounded-lg shadow-lg -translate-y-10`}>
                    <Loading message={message}/>
                </div>
            </div>

        </div>
    )
}

export default LoadingRandom