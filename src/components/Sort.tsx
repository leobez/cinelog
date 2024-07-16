type Props = {
    SubmitFunc:(e:any)=>void;
    setSort:(e:any)=>void;
    setOrder:(e:any)=>void;
}

const Sort = ({SubmitFunc, setSort, setOrder}: Props) => {

  return (
    <>

        <form onSubmit={SubmitFunc}>
            <div>

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

            <hr />

            {/* ascending or descending */}
            <div>
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
    </>
  )
}

export default Sort