import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([
    {
      image: "",
      title: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/api/movies");

        console.log(response.data);

        setMovies([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div>
          <img src={movie.image} />
          <h4>{movie.title}</h4>
          <button>
            <Link to={`/movie/${movie._id}`}>See more</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
