type Props = {
    MovieInfo: any
}

const POSTER_URL = import.meta.env.VITE_POSTER_URL

const MovieCard = ({MovieInfo}: Props) => {

    const MovieRelevantInfo = {
        id: MovieInfo.id,
        backdrop: MovieInfo.backdrop_path,
        genres_id: MovieInfo.genres_id,
        title: MovieInfo.title,
		original_title: MovieInfo.original_title,
		original_language: MovieInfo.original_language,
		overview: MovieInfo.overview,
		popularity: MovieInfo.popularity,
		poster_path: MovieInfo.poster_path,
		release_date: MovieInfo.release_date,
		vote_average: MovieInfo.vote_average,
		vote_count: MovieInfo.vote_count,
    }

    const posterURL = `${POSTER_URL}/${MovieRelevantInfo.poster_path}`

    return (
        
        <>
            <div className='h-full w-full cursor-pointer' onClick={()=>document.getElementById(`modal_${MovieRelevantInfo.id}`)?.showModal()}>
                <figure className='h-full w-full'>
                    <img src={posterURL} alt={MovieRelevantInfo.title} className='object-cover h-full w-full'/>
                </figure>
            </div>

            <dialog id={`modal_${MovieRelevantInfo.id}`} className="modal">

                <div className="modal-box h-[75%] p-0 bg-slate-200 scrollbar-thin">

                    <figure className='h-[700px] w-full'>
                        <img src={posterURL} alt={MovieRelevantInfo.title} className='object-cover h-full w-full'/>
                    </figure>

                    <div className='divider'/>

                    <h3 className="font-bold text-xl text-black">
                        {MovieRelevantInfo.title}
                    </h3>

                    <p className="">
                        {MovieRelevantInfo.original_title}
                    </p>

                    <div className="modal-action w-full">
                        <form method="dialog" className="grid place-items-center w-full p-2">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">
                                Close
                            </button>
                        </form>
                    </div>

                </div>

            </dialog>
        </>

    )
}

export default MovieCard