import { useContext, useEffect, useRef } from 'react'
import CategoryContext, { CategoryContextType } from '../context/CategoryContext'

const Categories = () => {

    const {category, changeCategory} = useContext(CategoryContext) as CategoryContextType

    const handleCategory = (e:any) => {
        changeCategory(e.target.id)
    }

    const tabRef:any = useRef()

    /* CHANGE ACTIVE TAB BASED ON CURRENT CATEGORY */
    useEffect(() => {
        tabRef.current.childNodes.forEach((child:any) => {
            if (child.id === category) {
                child.classList.add('tab-active')
            } else {
                child.classList.remove('tab-active')
            }
        })
    }, [category])

    return (
        <>

            <div role="tablist" className="tabs tabs-bordered p-2" ref={tabRef}>
                <a role="tab" id="top_rated" className="tab text-color03 text-lg font-bold" onClick={handleCategory}> Top rated movies </a>
                <a role="tab" id="popular" className="tab text-color03 text-lg font-bold" onClick={handleCategory}> Popular </a>
                <a role="tab" id="upcoming" className="tab text-color03 text-lg font-bold" onClick={handleCategory}> Upcoming </a>
            </div>

            <div className='divider'/>

        </>
    )
}

export default Categories