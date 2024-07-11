import { useContext } from "react";
import MovieContext, { MovieContextType } from "../context/MovieContext";

type Props = {
    text:string;
    loading:boolean;
    func:(e:any)=>void;
}

const Button = ({text,loading,func}: Props) => {

    const {warning} = useContext(MovieContext) as MovieContextType

    return (
        <>
            {!loading && !warning && <button type="submit" className="border-2 border-black p-3 hover:bg-black hover:text-white" onClick={func}>{text}</button>}
            {loading && <button type="submit" className="border-2 border-black p-3 bg-black text-white">Loading...</button>}
            {warning === 'No data.' && <button type="submit" className="border-2 border-black p-3 bg-black text-white">No data.</button>}
        </>
    )
}

export default Button