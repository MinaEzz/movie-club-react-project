import React, { useEffect, useState } from "react";
import "./style.css";
// components
import Intro from "../intro/Intro";
import Categories from "../categories/Categories";

function Main() {
  // state for categories and movies
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);
  // api key and apis
  const apiKey = "api_key=10da3093b6fe51d637b06dfabb81fede";
  const moviesAPI = `https://api.themoviedb.org/3/movie/top_rated?${apiKey}`;
  const genresAPI = `https://api.themoviedb.org/3/genre/movie/list?${apiKey}`;
  // genres fetch function
  const fetchGenres = async (api) => {
    await fetch(api)
      .then((res) => res.json())
      .then((json) => setGenres(json));
  };
  // movies fetch function
  const fetchMovies = async (api) => {
    await fetch(api)
      .then((res) => res.json())
      .then((json) => setMovies(json));
  };
  // use effect to run the fetch process
  useEffect(() => {
    fetchGenres(genresAPI);
    fetchMovies(moviesAPI);
  }, []);
  // console.log(movies);

  return (
    <>
      <Intro />
      <main id="main" className="pd-y-s">
        <div className="container">
          <div className="row">
            <div className="col col-md-3 col-12">
              <Categories genres={genres.genres} />
            </div>
            <div className="col col-9"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
