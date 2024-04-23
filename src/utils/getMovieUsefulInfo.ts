import { TMDB_GENRES } from "../data/TMDB_GENRES"

export type MovieInfo = {
        id                  : number,
        backdrop            : string,
        genres_id           : number[],
        genres_names        : string[],
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

/* Filtering only relevant info in movie object */
export const getMovieUsefulInfo = (movie:any) => {

    let genres_name:string[] = []

    // Converting genre_ids to genre_name and pushing into array
    movie.genre_ids.map((genre_id:number) => {
        genres_name.push(TMDB_GENRES[genre_id])
    })

    const MovieRelevantInfo:MovieInfo = {
        id                  : movie.id,
        backdrop            : movie.backdrop_path,
        genres_id           : movie.genre_ids,
        genres_names        : genres_name,
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

    return MovieRelevantInfo
    
}