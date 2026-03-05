import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { imdbId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchMovie() {
            try {
                const res = await fetch(
                    `https://ai-movie-insight-builder-backend-1.onrender.com/movie/${imdbId}`
                );

                console.log("Status:", res.status);

                const text = await res.text();   // read as text first
                console.log("Raw response:", text);

                const data = JSON.parse(text);   // manually parse

                setMovie(data);
            } catch (err) {
                console.error("Error:", err);
                setError("Failed to fetch movie");
            }
        }

        fetchMovie();
    }, [imdbId]);

    if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
    if (!movie) return <h2 style={{ color: "white" }}>Loading...</h2>;

    return (
        <div style={{ padding: "40px", color: "white" }}>
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.year}</h3>
            <h3>{movie.rating}</h3>
            <p>{movie.plot}</p>
        </div>
    );
}

export default MovieDetails;