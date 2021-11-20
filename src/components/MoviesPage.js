import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const {url, path} = useRouteMatch()

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${url}/:movieID`}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
