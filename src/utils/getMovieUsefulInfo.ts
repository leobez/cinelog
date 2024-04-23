import { TMDB_GENRES } from "../data/TMDB_GENRES"

export type MovieInfo = {
        id                  : number,
        backdrop            : string,
        genres_id           : number[],
        genres_names        : number[],
        title               : string,
		original_title      : string,
		original_language   : string,
		overview            : string,
		popularity          : number,
		poster_path         : string,
		release_date        : string,
		vote_average        : number,
		vote_count          : number,
}

export const getMovieUsefulInfo = (movie:any) => {

    let genres_name:string[]

    movie.genres_id.map((id) => {
    })

    console.log(TMDB_GENRES.genres)
    console.log(movie)

    const MovieRelevantInfo:MovieInfo = {
        id                  : movie.id,
        backdrop            : movie.backdrop_path,
        genres_id           : movie.genres_id,
        genres_names        : movie.genres_id,
        title               : movie.title,
		original_title      : movie.original_title,
		original_language   : movie.original_language,
		overview            : movie.overview,
		popularity          : movie.popularity,
		poster_path         : movie.poster_path,
		release_date        : movie.release_date,
		vote_average        : movie.vote_average,
		vote_count          : movie.vote_count,
    }



}