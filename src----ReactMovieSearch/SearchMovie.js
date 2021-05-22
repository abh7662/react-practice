import React, { useState } from "react"
import MovieCard from "./MovieCard"

const SearchMovie = () => {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    const searchMovies = async (e) => {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=57783f25ec6049e13457661cad8e73c1&language=en-US&query=${query}&page=1&include_adult=false`
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
            // console.log(data.results[0].id)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="Jurassic Park"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="sumbmit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    )
}
export default SearchMovie