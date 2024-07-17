type Props = {
    loading:boolean;
    error:string|null;
    warning:string|null
}

const Information = ({loading, error, warning}: Props) => {
    return (
        <>
            <p className="text-left">States of application: </p>
            {!loading && !error && !warning && <div className="border-2 border-color05 p-3"/>}
            {loading && <div className="border-2 border-blue-500 p-3 text-blue-500 font-bold animate-pulse">Loading...</div>}
            {error &&   <div className="border-2 border-red-500 p-3 text-red-500 font-bold animate-pulse ">Error: {error}</div>}
            {warning && <div className="border-2 border-orange-500 p-3 text-orange-500 font-bold animate-pulse ">Warning: {warning}</div>}
        </>

    )
}

export default Information