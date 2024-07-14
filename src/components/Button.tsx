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
            {!loading && !warning && <button type="submit" className="text-sm border-2 border-color05 p-3 hover:bg-color05 hover:text-white" onClick={func}>{text}</button>}
            {loading && <button type="submit" className="text-sm border-2 border-color05 p-3 bg-color05 text-white disabled">Loading...</button>}
            {warning === 'No data' && <button type="submit" className="text-sm border-2 border-color05 p-3 bg-color05 text-white disabled">No data</button>}
        </>
    )
}

export default Button