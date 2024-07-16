type Props = {
    SubmitFunc:(e:any)=>void;
    toggleSortFunc:(e:any)=>void;
    setSort:(e:any)=>void;
    setOrder:(e:any)=>void;
    sortByRef:any
}

const Sort = ({SubmitFunc, toggleSortFunc, setSort, setOrder, sortByRef}: Props) => {

  return (
    <>
        <div className="w-full flex justify-center">
            <div className="w-11/12 flex justify-end pb-2 flex-col">
                <button onClick={toggleSortFunc} className="border-black border-2 self-end h-full w-28 py-2 hover:bg-black hover:text-white">
                    Sort by
                </button>

                <div className="relative">
                    <div ref={sortByRef} className="h-fit w-44 mt-[0.5px] right-0 hidden top-0 border-2 border-color05 p-2 text-left animate-in slide-in-from-top-5 duration-400 absolute z-40 bg-white overflow-y-auto scrollbar-thin">
                        <form onSubmit={SubmitFunc}>

                        <div>
                            <div className="font-bold">Sort By</div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="original_title" 
                                    name="order" 
                                    value="original_title" 
                                    onChange={() => setSort('original_title')}
                                />
                                <label htmlFor="original_title">Original Title</label>
                            </div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="title" 
                                    name="order" 
                                    value="title" 
                                    onChange={() => setSort('title')}
                                />
                                <label htmlFor="title">Title</label>
                            </div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="popularity" 
                                    name="order" 
                                    value="popularity" 
                                    onChange={() => setSort('popularity')}
                                />
                                <label htmlFor="popularity">Popularity</label>
                            </div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="revenue" 
                                    name="order" 
                                    value="revenue" 
                                    onChange={() => setSort('revenue')}
                                />
                                <label htmlFor="revenue">Revenue</label>
                            </div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="primary_release_date" 
                                    name="order" 
                                    value="primary_release_date" 
                                    onChange={() => setSort('primary_release_date')}
                                />
                                <label htmlFor="primary_release_date">Release date</label>
                            </div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="budget" 
                                    name="order" 
                                    value="budget" 
                                    onChange={() => setSort('budget')}
                                />
                                <label htmlFor="budget">Budget</label>
                            </div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="vote_average" 
                                    name="order" 
                                    value="vote_average"
                                    onChange={() => setSort('vote_average')}
                                />
                                <label htmlFor="vote_average">Vote average</label>
                            </div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="vote_count" 
                                    name="order" 
                                    value="vote_count" 
                                    onChange={() => setSort('vote_count')}
                                />
                                <label htmlFor="vote_count">Vote count</label>
                            </div>
                        </div>

                        <div className="h-[1px] bg-black w-full my-2"/>

                        {/* ascending or descending */}
                        <div>
                            <div className="font-bold">Order By</div>

                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="asc" 
                                    name="ascdesc" 
                                    value="asc" 
                                    onChange={() => setOrder('asc')}
                                />
                                <label htmlFor="asc">Ascending</label>
                            </div>
                            <div className="flex gap-1">
                                <input 
                                    type="radio" 
                                    id="desc" 
                                    name="ascdesc" 
                                    value="desc" 
                                    onChange={() => setOrder('desc')}
                                />
                                <label htmlFor="desc">Descending</label>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="border-2 mt-2 border-black w-full py-1 hover:text-white hover:bg-black">Apply</button>
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