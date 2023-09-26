import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";

function MovieDetails({ apiKey }) {
  const api = `https://api.themoviedb.org/3/movie`;
  const [movie, setMoive] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`${api}/${params.movieId}?${apiKey}`)
      .then((res) => res.json())
      .then((json) => setMoive(json));
  }, []);
  return (
    <section
      id="movie-details"
      className="pd-y d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row align-items-center ">
          <div className="col col-lg-3 col-md-5 col-12">
            <div className="movie-image">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          </div>
          <div className="col col-lg-9 col-md-7 col-12">
            <div className="movie-details text-center px-4 mb-4">
              <h3 className="mb-3">{movie.title}</h3>
              <p>
                <strong>popularity:</strong> {movie.popularity}
              </p>
              <p>
                <strong>vote average:</strong> {movie.vote_average}
              </p>
              <p>
                <strong>date:</strong> {movie.release_date}
              </p>
              <p>
                <strong>original language:</strong> {movie.original_language}
              </p>
              <p>
                <strong>over view:</strong> {movie.overview}
              </p>
            </div>
            <div className=" d-flex align-items-center justify-content-center flex-wrap">
              <Link to="/" className="link-btn m-4">
                back home
              </Link>
              <Link
                to={movie.homepage}
                className="link-btn m-4"
                target="_blank"
              >
                watch movie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
