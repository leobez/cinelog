type Props = {
    func:(e:any)=>void;
}

const HiddenMenuButton = ({func}: Props) => {
  return (
    <button className='fixed left-2 z-30 bg-white p-3 border-2 border-black flex lg:hidden flex-col items-center justify-center gap-2 hover:bg-gray-200' onClick={func}>
        <span className='rounded-md w-8 h-1 bg-black'></span>
        <span className='rounded-md w-8 h-1 bg-black'></span>
        <span className='rounded-md w-8 h-1 bg-black'></span>
    </button>
  )
}

export default HiddenMenuButton