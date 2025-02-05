import MovieCard from "../component/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css"

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
            {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
            </div>
        </div>
        );
    }
    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
    </div>
}
export default Favorites