export const getMovieMissingInfo = (movie:any):string[] => {
    
    /* 
        RELEVANT INFORMATION FROM MOVIE 
            movie.budget                : number
            movie.genres                : any[]
            movie.id                    : number
            movie.origin_country        : string[]
            movie.original_language     : string
            movie.original_title        : string
            movie.overview              : string
            movie.popularity            : number
		    movie.poster_path           : string
            movie.production_companies  : any[]
            movie.production_countries  : any[]
            movie.release_date          : string
            movie.revenue               : number
            movie.runtime               : number
            movie.spoken_languages      : any[]
            movie.title                 : string
            movie.vote_average          : number
            movie.vote_count            : number
    */

    let missingInfo = []

    if (!movie.budget) {
        missingInfo.push('budget')
    }    

    if (!movie.genres || !movie.genres.length) {
        missingInfo.push('genres')
    }   

    if (!movie.id) {
        missingInfo.push('id')
    }     

    if (!movie.origin_country || !movie.origin_country.length) {
        missingInfo.push('origin country')
    }     

    if (!movie.original_language || !movie.original_language.length) {
        missingInfo.push('original language')
    } 

    if (!movie.original_title || !movie.original_title.length) {
        missingInfo.push('original title')
    }  

    if (!movie.overview || !movie.overview.length) {
        missingInfo.push('overview')
    }  

    if (!movie.popularity) {
        missingInfo.push('popularity')
    }  
     
    if (!movie.poster_path || !movie.poster_path.length) {
        missingInfo.push('poster path')
    }  

    if (!movie.production_companies || !movie.production_companies.length) {
        missingInfo.push('production companies')
    }  

    if (!movie.production_countries || !movie.production_countries.length) {
        missingInfo.push('production countries')
    }  

    if (!movie.release_date || !movie.release_date.length) {
        missingInfo.push('release date')
    }  

    if (!movie.revenue) {
        missingInfo.push('revenue')
    } 

    if (!movie.runtime) {
        missingInfo.push('runtime')
    }     

    if (!movie.spoken_languages || !movie.spoken_languages.length) {
        missingInfo.push('spoken languages')
    }      

    if (!movie.title || !movie.title.length) {
        missingInfo.push('title')
    }   
      
    if (!movie.vote_average) {
        missingInfo.push('vote average')
    }           

    if (!movie.vote_count) {
        missingInfo.push('vote count')
    }  
    
    return missingInfo
}
