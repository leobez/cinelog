import { useContext, useEffect } from "react"

const Header = () => {

    const handleToggle = () => {
        console.log('TOGGLE')
    }

    return (
    <header className='p-4 border-2 border-black flex justify-between align-middle'>

        <div className="grid place-items-center font-bold text-xl">
            G A M E S
        </div>

        <div className="grid place-items-center">
            <input type="checkbox" className="toggle toggle-lg [--tglbg:white] bg-black hover:bg-slate-500 border-2 border-black" onClick={handleToggle}/>
        </div>

        <div className="grid place-items-center font-bold text-xl">
            M O V I E S
        </div>

    </header>
  )
}

export default Header