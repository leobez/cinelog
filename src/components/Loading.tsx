type Props = {
    message:string
}

const Loading = ({message}: Props) => {
    return (
        <div className='h-full w-full flex flex-col justify-center items-center gap-4'>
            <span className="loading loading-spinner loading-lg"></span>
            <p className='font-bold'>{message}</p>
        </div>
    )
}

export default Loading