import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div id="movie-card">
      <div className="card-image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="card-content">
        <h3>{movie.title}</h3>
        <div className="card-body my-4">
          <p>
            <strong>popularity:</strong> {movie.popularity}{" "}
          </p>
          <p>
            <strong>vote average:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>date:</strong> {movie.release_date}
          </p>
        </div>
        <Link className="link-btn">details</Link>
      </div>
    </div>
  );
}

export default MovieCard;
