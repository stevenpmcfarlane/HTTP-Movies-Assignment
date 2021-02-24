import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";
import Movie from "./Movie";

const initialMovie = {
  title: "",
  director: "",
  metascore: null,
  stars: "",
};

function UpdateMovie() {
  const [movie, setMovie] = useState(initialMovie);
  const id = props.match.params.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${id}`, movie)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    let value = event.target.name;

    setMovie({
      ...movie,
      [event.target.name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          value={movie.title}
          onChange={handleChange}
        />
        <input
          name="director"
          type="text"
          value={movie.director}
          onChange={handleChange}
        />
        <input
          name="metascore"
          type="number"
          value={movie.metascore}
          onChange={handleChange}
        />
        <input
          name="stars"
          type="text"
          value={movie.stars}
          onChange={handleChange}
        />
        <button>Update Movie</button>
      </form>
    </div>
  );
}

export default UpdateMovie;
