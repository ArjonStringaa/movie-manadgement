import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddMovie from "../components/AddMovie";
import MovieList from "../components/MovieList";
import useLocalStorage from "../hooks/useLocalStorage";
import { Redirect } from "react-router";
import EditMovie from "../components/EditMovie";

const AppRouter = () => {
  const [movies, setMovies] = useLocalStorage("movies", []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <MovieList {...props} movies={movies} setMovies={setMovies} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddMovie {...props} movies={movies} setMovies={setMovies} />
              )}
              path="/add"
            />

            <Route
              render={(props) => (
                <EditMovie {...props} movies={movies} setMovies={setMovies} />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
