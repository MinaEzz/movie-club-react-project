import React from "react";
import "./style.css";
// components
import Intro from "../intro/Intro";
import MovieList from "../movieList/MovieList";
import Pagination from "../pagination/Pagination";

function Main({ movies, totalPages, fetchMoviesByPage }) {
  return (
    <>
      <Intro />
      <main id="main" className="pd-y-s">
        <div className="container">
          <MovieList movies={movies} />
          {movies && (
            <Pagination
              totalPages={totalPages}
              fetchMoviesByPage={fetchMoviesByPage}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default Main;
