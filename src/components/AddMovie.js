import React from "react";
import MovieForm from "./MovieForm";

const AddMovie = ({ history, movies, setMovies }) => {
  const handleOnSubmit = (movie) => {
    setMovies([movie, ...movies]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <MovieForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddMovie;
