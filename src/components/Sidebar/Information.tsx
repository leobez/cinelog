type Props = {
    loading:boolean;
    message:any; // .message and .color
}

const Information = ({loading, message}: Props) => {

    console.log(message)

    return (
        <>
            <p className="text-left">States of application: </p>

            <div>
                
            </div>

            {loading && 
                <div className={`border-2 border-blue-700 text-blue-700 font-bold animate-pulse p-3`}>
                    Loading...
                </div>
            }

            {message !== null &&
                <div className={`border-2 border-${message.color}-700 text-${message.color}-700 font-bold animate-pulse p-3`}>
                    {message.message}
                </div>
            }
        </>

    )
}

export default Information