import { useContext } from "react";
import { toggleComponent } from "../../utils/toggleComponent";
import ThemeContext, { ThemeContextType } from "../../context/ThemeContext";

type Props = {
    SubmitFunc:(e:any)=>void;
    setSort:(e:any)=>void;
    setOrder:(e:any)=>void;
    sortByRef:any
}

const Sort = ({SubmitFunc, setSort, setOrder, sortByRef}: Props) => {

    const {theme} = useContext(ThemeContext) as ThemeContextType 

    return (
        <>
            <div className={`w-full flex justify-center bg-${theme}-700 rounded-lg shadow-lg p-5`}>
                <div className="w-11/12 flex justify-end pb-2 flex-col">
                    <button onClick={() => toggleComponent(sortByRef)} className={`w-fit self-end text-sm rounded-lg shadow-lg bg-${theme}-900 py-4 px-6 text-white hover:bg-${theme}-950`}>
                        Sort by
                    </button>

                    <div className="relative">

                        <div ref={sortByRef} 
                        className={`h-fit w-44 mt-1 p-4 right-0 hidden top-0 rounded-lg shadow-lg bg-${theme}-600 animate-in slide-in-from-top-5 duration-400 absolute z-40 overflow-y-auto scrollbar-thin text-white`}
                        >
                            <form onSubmit={SubmitFunc} className="flex flex-col gap-3">

                                <div className="flex flex-col gap-1">

                                    <div className="font-bold text-white text-left">Sort By</div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="original_title" 
                                            name="order" 
                                            value="original_title" 
                                            onChange={() => setSort('original_title')}
                                        />
                                        <label htmlFor="original_title" className="text-white text-sm font-bold">Original Title</label>
                                    </div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="title" 
                                            name="order" 
                                            value="title" 
                                            onChange={() => setSort('title')}
                                        />
                                        <label htmlFor="title" className="text-white text-sm font-bold">Title</label>
                                    </div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="popularity" 
                                            name="order" 
                                            value="popularity" 
                                            onChange={() => setSort('popularity')}
                                        />
                                        <label htmlFor="popularity" className="text-white text-sm font-bold">Popularity</label>
                                    </div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="revenue" 
                                            name="order" 
                                            value="revenue" 
                                            onChange={() => setSort('revenue')}
                                        />
                                        <label htmlFor="revenue" className="text-white text-sm font-bold">Revenue</label>
                                    </div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="primary_release_date" 
                                            name="order" 
                                            value="primary_release_date" 
                                            onChange={() => setSort('primary_release_date')}
                                        />
                                        <label htmlFor="primary_release_date" className="text-white text-sm font-bold">Release date</label>
                                    </div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="budget" 
                                            name="order" 
                                            value="budget" 
                                            onChange={() => setSort('budget')}
                                        />
                                        <label htmlFor="budget" className="text-white text-sm font-bold">Budget</label>
                                    </div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="vote_average" 
                                            name="order" 
                                            value="vote_average"
                                            onChange={() => setSort('vote_average')}
                                        />
                                        <label htmlFor="vote_average" className="text-white text-sm font-bold">Vote average</label>
                                    </div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="vote_count" 
                                            name="order" 
                                            value="vote_count" 
                                            onChange={() => setSort('vote_count')}
                                        />
                                        <label htmlFor="vote_count" className="text-white text-sm font-bold">Vote count</label>
                                    </div>
                                </div>

                                <div className={`h-[2px] bg-${theme}-950 w-full`}/>

                                {/* ascending or descending */}
                                <div className="flex flex-col gap-1">
                                    <div className="font-bold text-white text-left">Order By</div>

                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="asc" 
                                            name="ascdesc" 
                                            value="asc" 
                                            onChange={() => setOrder('asc')}
                                        />
                                        <label htmlFor="asc" className="text-white text-sm font-bold">Ascending</label>
                                    </div>
                                    <div className="flex gap-1">
                                        <input 
                                            type="radio" 
                                            id="desc" 
                                            name="ascdesc" 
                                            value="desc" 
                                            onChange={() => setOrder('desc')}
                                        />
                                        <label htmlFor="desc" className="text-white text-sm font-bold">Descending</label>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className={`w-full text-sm rounded-lg shadow-lg bg-${theme}-900 p-4 text-white disabled hover:bg-${theme}-950`}>Apply</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sort