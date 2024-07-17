import Sidebar from './Sidebar'

const HiddenSidebar = () => {
    return (
        <div className='overflow-y-scroll min-h-screen'>
            <Sidebar/>
        </div>
    )
}

export default HiddenSidebar