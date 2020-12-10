import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieDetail(props) {
  const [movie, setMovie] = useState({
    image: "",
    title: "",
    director: "",
    description: "",
    stars: [],
    showtimes: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const { id } = props.match.params;

        const response = await axios.get(
          `http://localhost:5000/api/movies/${id}`
        );

        console.log(response.data);
        setMovie({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  return (
    <div>
      <img src={movie.image} />
      <div>
        <h3>{movie.title}</h3>
        <h4>
          <strong>Director: </strong>
          {movie.director}
        </h4>
        <strong>Stars: </strong>
        <ul>
          {movie.stars.map((star, idx) => (
            <li key={star[0].toLowerCase() + idx}>{star}</li>
          ))}
        </ul>
        <p>{movie.description}</p>
        {movie.showtimes.map((time) => (
          <span>{time} |</span>
        ))}
      </div>
    </div>
  );
}

export default MovieDetail;
