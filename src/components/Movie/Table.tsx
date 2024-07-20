type Props = {
    head:string[];
    rows:any[][];
    position:string
}

const Table = ({head, rows, position}: Props) => {

    return (
        <>
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr className={position}>
                    {head.map((text:string, index:number) => (
                        <th key={index} className='font-bold text-center text-white text-xs'>{text}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row:any, index:number) => (
                    <tr className={position} key={`a${index}`}>
                        {row.map((rowElements:string, index:number)=>( 
                            <td key={`b${index}`} className="text-white text-xs">{rowElements}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}

export default Table