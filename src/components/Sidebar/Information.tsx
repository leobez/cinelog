type Props = {
    loading:boolean;
    message:any; // .message and .color
}

// Currently not used

const Information = ({loading, message}: Props) => {

    return (
        <>
            <div className='min-h-32 p-2 w-full grid place-items-center'>
                {loading && 
                    <div className={`border-2 border-blue-400 animate-pulse p-3 h-full w-full grid place-items-center`}>
                        <p className="text-blue-400 font-bold ">Loading...</p>
                    </div>
                }

                {message &&
                    <div className={`border-2 border-${message.color}-400 animate-pulse p-3 h-full w-full grid place-items-center`}>
                        <p className={`text-${message.color}-400 font-bold`}>{message.message}</p>
                    </div>
                }
            </div>

        </>

    )
}

export default Information