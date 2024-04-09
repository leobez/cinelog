import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieById } from '../hooks/movie/useGetMovieById'

type Props = {}

const Movie = (props: Props) => {

    const {id} = useParams()

    const {loading, error, movie} = useGetMovieById(Number(id))

    console.log('MOVIE: ', movie)

  return (
    <div>Movie</div>
  )
}

export default Movie