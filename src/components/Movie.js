import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    const [movie, setMovie] = useState({});
    let { id } = useParams();

    useEffect(() => {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const requestOptions = {
            method: "GET",
            headers: headers,
        }

        fetch(`http://localhost:8080/movies/${id}`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                data.release_date = new Date(data.release_date)
                    .toISOString()
                    .split("T")[0];
                setMovie(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    if (movie.genres) {
        movie.genres = Object.values(movie.genres);
    } else {
        movie.genres = [];
    }

    return (
        <div>
            <h2>Movie: {movie.title}</h2>
            <small><em>{movie.release_date}, {movie.runtime} 分, Rated {movie.mpaa_rating}</em></small><br />
            {movie.genres.map((g) => (
                <span key={g.genre} className="badge bg-secondary me-2">{g.genre}</span>
            ))}
            <hr />

            {movie.image !== "" &&
                <div className="mb-3">
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.image}`} alt="poster" />
                </div>
            }

            <p>{movie.description}</p>
        </div>
    )
}

export default Movie;