type Props = {
    text:string;
    loading:boolean;
    func:()=>void;
}

const Button = ({text,loading,func}: Props) => {

    return (
        <>
            {!loading && <button className="border-2 border-black p-3 hover:bg-black hover:text-white" onClick={func}>{text}</button>}
            {loading && <button className="border-2 border-black p-3 bg-black text-white">Loading...</button>}
        </>
    )
}

export default Button