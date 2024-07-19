type Props = {
    head:string[];
    rows:any[][];
}

const Table = ({head, rows}: Props) => {

    return (
        <>
            <table className="table">
                {/* head */}
                <thead>
                <tr className='text-left'>
                    {head.map((text:string, index:number) => (
                        <th key={index} className='font-bold'>{text}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {rows.map((row:any, index:number) => (
                    <tr className='text-left' key={`a${index}`}>
                        {row.map((rowElements:string, index:number)=>(
                            <td key={`b${index}`}>{rowElements}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}

export default Table