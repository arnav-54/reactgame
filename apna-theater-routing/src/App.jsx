import MovieCard from "./components/MovieCard";
import "./App.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import MovieDetails from "./components/MovieDetails";
import { Routes, Route } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState("");
  function fetchMovies(name) {
    if (name == "") return;

    fetch(`http://www.omdbapi.com/?apikey=5941fb3&s=${name}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => console.log(err.message));
  }

  useEffect(() => {
    fetchMovies("transformer");
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
  };

  console.log(movies);
  return (
    <div>
      <div className="navbar">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.currentTarget.value)}
          className="search"
          placeholder="Enter a Movie Name"
        />
        <button
          onClick={() => {
            fetchMovies(userInput);
          }}
        >
          Search{" "}
        </button>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Slider {...settings}>
              {movies.map((item, index) => (
                <MovieCard
                  movieId={item.imdbID}
                  key={index}
                  title={item.Title}
                  image={item.Poster}
                />
              ))}
            </Slider>
          }
        />
        <Route path="/movie/:movieid" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
