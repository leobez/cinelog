type Props = {
    text:string;
    loading:boolean;
    func:(e:any)=>void;
}

const Button = ({text,loading,func}: Props) => {

    return (
        <>
            {!loading && 
                <button 
                    type="submit" 
                    className="text-sm rounded-lg shadow-lg bg-rose-900 p-4 text-white hover:bg-rose-950" 
                    onClick={func}
                    >
                    {text}
                </button>
            }

            {loading && 
                <button 
                    type="submit" 
                    className="text-sm rounded-lg shadow-lg bg-rose-900 p-4 text-white disabled hover:bg-rose-950"
                    >
                    Loading...
                </button>}
        </>
    )
}

export default Button