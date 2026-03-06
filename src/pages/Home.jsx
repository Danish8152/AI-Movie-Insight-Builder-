import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

function Home() {
    const [imdbId, setImdbId] = useState("");
    const [error, setError] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const exampleMovies = [
        {
            title: "Inception",
            imdbId: "tt1375666",
            poster: "https://wallpaperaccess.com/full/1264689.jpg",
        },
        {
            title: "The Matrix",
            imdbId: "tt0133093",
            poster: "https://th.bing.com/th/id/R.32cb08001de3e70b99673877dfabf248?rik=%2brtYh8h%2bfxwzMg&riu=http%3a%2f%2fmovies-posters.co.uk%2fwp-content%2fuploads%2f2013%2f10%2fmatrix_quad_landscape.jpg&ehk=d1XNbkRBjWfLSyaAxcRQEOhOpw9XtWjNS96jYZ70mIY%3d&risl=&pid=ImgRaw&r=0",
        },
        {
            title: "Interstellar",
            imdbId: "tt0816692",
            poster: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        },
        {
            title: "The Dark Knight",
            imdbId: "tt0468569",
            poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
    ];

    const exampleMoviesTwo = [
        {
            title: "Avatar",
            imdbId: "tt0499549",
            poster: "https://image.tmdb.org/t/p/original/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
        },
        {
            title: "Gladiator",
            imdbId: "tt0172495",
            poster: "https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        },
        {
            title: "Avengers: Endgame",
            imdbId: "tt4154796",
            poster: "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        },
        { title: "Joker", imdbId: "tt7286456", poster: "https://wallpaperaccess.com/full/229583.jpg", }, 
        { title: "Titanic", imdbId: "tt0120338", poster: "https://wallpaperaccess.com/full/36626.jpg", }, 
        { title: "The Shawshank Redemption", imdbId: "tt0111161", poster: "https://wallpaperaccess.com/full/19245.jpg", }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === exampleMovies.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? exampleMovies.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === exampleMovies.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleSearch = () => {
        if (!imdbId.trim()) {
            setError("Please enter an IMDb ID");
            return;
        }

        if (!imdbId.startsWith("tt")) {
            setError("IMDb ID must start with 'tt' (example: tt0133093)");
            return;
        }

        setError("");
        navigate(`/movie/${imdbId}`);
    };

    const handleExampleClick = (id) => {
        navigate(`/movie/${id}`);
    };

    const currentMovie = exampleMovies[currentIndex];

    return (
        <div className="home-container">
            <div className="home-left">
                <h1>AI Movie Insight Builder</h1>
                <p>Enter an IMDb ID to explore movie details and cast information</p>

                <input
                    type="text"
                    placeholder="Example: tt0133093"
                    value={imdbId}
                    onChange={(e) => setImdbId(e.target.value)}
                />

                <button onClick={handleSearch}>Search</button>

                {error && <p className="error">{error}</p>}
            </div>

            <div className="home-right">
                <h3>Popular Movies</h3>

                <div className="carousel">
                    <button className="nav-btn left" onClick={prevSlide}>
                        ‹
                    </button>

                    <div
                        className="movie-card"
                        onClick={() => handleExampleClick(currentMovie.imdbId)}
                    >
                        <img src={currentMovie.poster} alt={currentMovie.title} />
                        <h4>{currentMovie.title}</h4>
                        <p>{currentMovie.imdbId}</p>
                    </div>

                    <button className="nav-btn right" onClick={nextSlide}>
                        ›
                    </button>
                </div>
            </div>
{/* Bottom section card */}
            <div className="bottom-section">
                <h2 className="explore-heading">Explore More</h2>

                <div className="bottom-cards">
                    {exampleMoviesTwo.map((movie) => (
                        <div
                            key={movie.imdbId}
                            className="bottom-card"
                            onClick={() => handleExampleClick(movie.imdbId)}
                        >
                            <img src={movie.poster} alt={movie.title} />
                            <h4>{movie.title} ({movie.imdbId})</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;