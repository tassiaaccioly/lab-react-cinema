import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  async function callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/api");
    console.log(responseFromBackend);
  }
  return (
    <div>
      <h1>Cinema Ironhack</h1>
      <Link to="/movies">
        <button>Check the movies!</button>
      </Link>
    </div>
  );
}

export default Home;
