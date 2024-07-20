type Props = {
    head:string[];
    rows:any[][];
}

const Table = ({head, rows}: Props) => {

    return (
        <>
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr className='text-left'>
                    {head.map((text:string, index:number) => (
                        <th key={index} className='font-bold text-center text-white'>{text}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row:any, index:number) => (
                    <tr className='text-center' key={`a${index}`}>
                        {row.map((rowElements:string, index:number)=>(
                            <td key={`b${index}`} className="text-white">{rowElements}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}

export default Table