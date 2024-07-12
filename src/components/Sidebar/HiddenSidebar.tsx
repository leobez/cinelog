import Categories from '../Categories'
import Sidebar from './Sidebar'

type Props = {}

const HiddenSidebar = () => {
    return (
        <>
            <div className='bg-white'>
                <Categories/>
             </div>

            <Sidebar/>
        </>
    )
}

export default HiddenSidebar