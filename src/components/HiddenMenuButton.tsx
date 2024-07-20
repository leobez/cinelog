type Props = {
    func:(e:any)=>void;
}

const HiddenMenuButton = ({func}: Props) => {
  return (
    <button className='bg-rose-700 h-full z-30 p-3 shadow-lg rounded-lg flex lg:hidden flex-col items-center justify-center gap-2 hover:bg-rose-400' onClick={func}>
        <span className='rounded-md w-8 h-1 bg-rose-950'></span>
        <span className='rounded-md w-8 h-1 bg-rose-950'></span>
        <span className='rounded-md w-8 h-1 bg-rose-950'></span>
    </button>
  )
}

export default HiddenMenuButton