type Props = {
    loading:boolean;
    message:any; // .message and .color
}

const Information = ({loading, message}: Props) => {

    return (
        <>
            <p className="text-left">Feedback from application: </p>

            <div className='border-2 border-black min-h-32 p-2 w-full grid place-items-center'>
                {loading && 
                    <div className={`border-2 border-blue-700 animate-pulse p-3 h-full w-full grid place-items-center`}>
                        <p className="text-blue-700 font-bold ">Loading...</p>
                    </div>
                }

                {message &&
                    <div className={`border-2 border-${message.color}-700 animate-pulse p-3 h-full w-full grid place-items-center`}>
                        <p className={`text-${message.color}-700 font-bold`}>{message.message}</p>
                    </div>
                }
            </div>

        </>

    )
}

export default Information