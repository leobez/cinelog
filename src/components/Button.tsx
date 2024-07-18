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
                    className="text-sm border-2 border-color05 p-3 hover:bg-color05 hover:text-white" 
                    onClick={func}
                    >
                    {text}
                </button>
            }

            {loading && 
                <button 
                    type="submit" 
                    className="text-sm border-2 border-color05 p-3 bg-color05 text-white disabled"
                    >
                    Loading...
                </button>}
        </>
    )
}

export default Button