import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieList() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5000/movies");

        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return <div></div>;
}

export default MovieList;
