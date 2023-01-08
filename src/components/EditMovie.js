import React from "react";
import MovieForm from "./MovieForm";
import { useParams } from "react-router-dom";

const EditMovie = ({ history, movies, setMovies }) => {
  const { id } = useParams();
  const movieToEdit = movies.find((movie) => movie.id === id);

  const handleOnSubmit = (movie) => {
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    setMovies([movie, ...filteredMovies]);
    history.push("/");
  };

  return (
    <div>
      <MovieForm movie={movieToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditMovie;
