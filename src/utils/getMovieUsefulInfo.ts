import { TMDB_GENRES } from "../data/TMDB_GENRES"

export type MovieInfo = {
        id                  : number,
        backdrop            : string,
        genre_ids           : number[],
        genre_names         : string[],
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

export type MovieByIdInfo = {
    id                  : number,
    backdrop            : string,
    collection          : any,
    budget              : number,
    genres              : any[],
    origin_country      : string[],
    production_compan   : any[],
    production_countries: any[],
    title               : string,
    original_title      : string,
    original_language   : string,
    overview            : string,
    popularity          : number,
    poster_path         : string,
    release_date        : string,
    vote_average        : number,
    vote_count          : number,
    revenue             : number,
    runtime             : number
    spoken_lang         : string,
    status              : string,
}



/* Filtering only relevant info in movie object */
export const getMovieUsefulInfo = (movie:any, byId:boolean=false) => {

    if (byId) {
        
        const MovieRelevantInfo:MovieByIdInfo = {
            id                  : movie.id,
            backdrop            : movie.backdrop_path,
            collection          : movie.belongs_to_collection,
            budget              : movie.budget,
            genres              : movie.genres,
            origin_country      : movie.origin_country,
            production_compan   : movie.production_companies,
            production_countries: movie.production_countries,
            title               : movie.title,
            original_title      : movie.original_title,
            original_language   : movie.original_language,
            overview            : movie.overview,
            popularity          : movie.popularity,
            poster_path         : movie.poster_path,
            release_date        : movie.release_date,
            vote_average        : movie.vote_average,
            vote_count          : movie.vote_count,
            revenue             : movie.revenue,
            runtime             : movie.runtime,
            spoken_lang         : movie.spoken_languages,
            status              : movie.status,
        }
    
        return MovieRelevantInfo
    }

    let genres_name:string[] = []

    // Converting genre_ids to genre_name and pushing into array
    movie.genre_ids.map((genre_id:number) => {
        genres_name.push(TMDB_GENRES[genre_id])
    })

    const MovieRelevantInfo:MovieInfo = {
        id                  : movie.id,
        backdrop            : movie.backdrop_path,
        genre_ids           : movie.genre_ids,
        genre_names        :  genres_name,
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