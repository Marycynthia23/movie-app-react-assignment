import styles from "./Movies.module.css";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "4f298a53e552283bee957836a529baec";
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

export const Movies = (props) => {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const response = await fetch(`${API_BASE_URL}/popular?api_key=${API_KEY}`);
    const result = await response.json();
    return result.results;
  }

  useEffect(() => {
    let mounted = true;
    getMovies().then((movies) => {
      if (mounted) {
        setMovies(movies);
        // console.log(movies);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const previewSelected = (movieData) => {
    window.localStorage.setItem("movie_data", JSON.stringify(movieData));
    // console.log("ava", props);
    props.props.history.push("/movieoverview");
  };

  return (
    <div className={styles.movieBox}>
      {movies.map((movie, index) => {
        return (
          <div className={styles.box} key={index}>
            <a href="/movieoverview" onClick={() => previewSelected(movie)}>
              <div className={styles.cards}>
                <img
                  src={`${imageBaseUrl}/${movie.poster_path}`}
                  alt="Avatar"
                />
                <div className={styles.circle}>
                  <div className={styles.Average}>
                    <span>{`${movie.vote_average}`}</span>
                  </div>
                </div>
                <div className={styles.details}>
                  <h4>{`${movie.original_title}`}</h4>
                  <p className={styles.date}>{`${movie.release_date}`}</p>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
};
