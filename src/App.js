import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// components
import Navbar from "./components/navbar/Navbar.jsx";
import Main from "./components/main/Main.jsx";
import MovieDetails from "./components/movieDetails/MovieDetails.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // api key and apis
  const apiKey = "api_key=10da3093b6fe51d637b06dfabb81fede";
  const moviesAPI = `https://api.themoviedb.org/3/movie/popular?${apiKey}`;
  // movies fetch function
  const fetchMovies = async (api) => {
    await fetch(api)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setTotalPages(json.total_pages);
      })
      .catch((error) => console.log(error));
  };
  // fetch movies by page count
  const fetchMoviesByPage = async (page) => {
    await fetch(`${moviesAPI}&page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setCurrentPage(page);
      })
      .catch((error) => console.log(error));
  };
  // use effect to run the fetch process
  useEffect(() => {
    fetchMovies(moviesAPI);
  }, []);
  // search function
  const searchMethod = (word) => {
    if (word === "") {
      fetchMoviesByPage(currentPage);
    } else {
      const filteredMovies = movies.filter((movie) =>
        movie.title.includes(word)
      );
      setMovies(filteredMovies);
      window.scrollY < window.innerHeight &&
        window.scroll({
          top: window.innerHeight,
          behavior: "smooth",
        });
    }
  };
  return (
    <Router>
      <Navbar searchMethod={searchMethod} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              movies={movies}
              totalPages={totalPages}
              fetchMoviesByPage={fetchMoviesByPage}
            />
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieDetails apiKey={apiKey} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
