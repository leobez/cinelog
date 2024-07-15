type Props = {
    func:(e:any)=>void;
    func2:(e:any)=>void;
    func3:(e:any)=>void;
}

const Order = ({func, func2, func3}: Props) => {

  return (
    <>
        {/* Choose option to sort by (only one - radio) */}
        {/* Choose if it will be asc or desc */}
        {/* Click button */}
        <form onSubmit={func}>
            <div>

                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="budget" 
                        name="order" 
                        value="budget" 
                        onChange={() => func2('budget')}
                    />
                    <label htmlFor="budget">Budget</label>
                </div>

                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="popularity" 
                        name="order" 
                        value="popularity" 
                        onChange={() => func2('popularity')}
                    />
                    <label htmlFor="popularity">Popularity</label>
                </div>

                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="release_date" 
                        name="order" 
                        value="release_date" 
                        onChange={() => func2('release_date')}
                    />
                    <label htmlFor="release_date">Release date</label>
                </div>

                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="revenue" 
                        name="order" 
                        value="revenue" 
                        onChange={() => func2('revenue')}
                    />
                    <label htmlFor="revenue">Revenue</label>
                </div>

                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="runtime" 
                        name="order" 
                        value="runtime" 
                        onChange={() => func2('runtime')}
                    />
                    <label htmlFor="runtime">Runtime</label>
                </div>

                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="vote_average" 
                        name="order" 
                        value="vote_average"
                        onChange={() => func2('vote_average')}
                    />
                    <label htmlFor="vote_average">Vote average</label>
                </div>

                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="vote_count" 
                        name="order" 
                        value="vote_count" 
                        onChange={() => func2('vote_count')}
                    />
                    <label htmlFor="vote_count">Vote count</label>
                </div>

            </div>

            <hr />

            {/* ASC OR DESC */}
            <div>
                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="asc" 
                        name="ascdesc" 
                        value="asc" 
                        onChange={() => func3('asc')}
                    />
                    <label htmlFor="asc">ASC</label>
                </div>
                <div className="flex gap-1">
                    <input 
                        type="radio" 
                        id="desc" 
                        name="ascdesc" 
                        value="desc" 
                        onChange={() => func3('desc')}
                    />
                    <label htmlFor="desc">DESC</label>
                </div>
            </div>

            <div>
                <button type="submit" className="border-2 mt-2 border-black w-full py-1 hover:text-white hover:bg-black">Apply</button>
            </div>
        </form>
    </>
  )
}

export default Order