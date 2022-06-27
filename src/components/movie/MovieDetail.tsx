import React from "react";
import { useLocation } from "react-router";
import MovieDescription from "./MovieDescription";

const MovieDetail: React.FC = () => {
  const { state } = useLocation();
  if (!state) {
    return <h1>Movie not found.</h1>;
  }
  const { movie }: any = state;

  return <MovieDescription pDes={movie} />;
};

export default MovieDetail;
