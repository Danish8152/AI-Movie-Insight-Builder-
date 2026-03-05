import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/Movies.css"

function MovieDetails() {
    const { imdbId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/movie/${imdbId}`);

                console.log("Status:", res.status);

                const text = await res.text();
                console.log("Raw response:", text);

                const data = JSON.parse(text);

                setMovie(data);
            } catch (err) {
                console.error("Error:", err);
                setError("Failed to fetch movie");
            }
        }

        fetchMovie();
    }, [imdbId]);

    if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
    if (!movie)
        return (
            <div className="loading-spinner-container">
                <div className="spinner"></div>
            </div>
        );

    return (
        <div className="movie-details">
            <div className="movie-top">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="movie-poster"
                />

                <div className="movie-info">
                    <h1 className="movie-title">{movie.title}</h1>

                    <div className="movie-meta">
                        <span>{movie.year}</span>
                        <span className="movie-rating">⭐ {movie.rating}</span>
                    </div>

                    <p className="movie-plot">{movie.plot}</p>
                    <div className="sentiment-box">
                        <h3 className="sentiment-title">Audience Sentiment</h3>

                        <p className="sentiment-summary">
                            {movie.sentiment?.summary}
                        </p>

                        <span
                            className={`sentiment-badge ${movie.sentiment?.overall?.toLowerCase()
                                }`}
                        >
                            Overall audience sentiment is {movie.sentiment?.overall}
                        </span>
                    </div>
                </div>

            </div>

            <h2 className="cast-title">Cast</h2>

            <div className="cast-grid">
                {movie.cast &&
                    movie.cast.map((actor) => (
                        <div key={actor.name} className="cast-card">
                            <img
                                src={actor.profile}
                                alt={actor.name}
                                className="cast-image"
                            />
                            <h4 className="cast-name">{actor.name}</h4>
                            <p className="cast-role">{actor.character}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MovieDetails;