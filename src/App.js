import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { useDispatch } from "react-redux";
import { resetSongs, resetMovies } from "./store";

export default function App() {
  const dispath = useDispatch();
  const handleResetClick = () => {
    dispath(resetSongs());
    dispath(resetMovies());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
