import React from "react";
import "./style.css";
import MovieCard from "../movieCard/MovieCard";

function MovieList({ movies }) {
  return (
    <section id="movies-list" className="py-4">
      <div className="row flex-wrap justify-content-around align-items-center">
        {movies ? (
          movies.map((movie) => {
            return (
              <div className="col col-lg-3 col-md-5 col-10" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            );
          })
        ) : (
          <div className="col-12">
            <div class="alert alert-info text-center" role="alert">
              No Movies Found
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MovieList;
