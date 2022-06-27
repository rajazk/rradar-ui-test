import React, { useState, useEffect, useCallback } from "react";
import Pagination from "@mui/material/Pagination";
import MovieCard from "./MovieCard";
import { faker } from "@faker-js/faker";
import { movieListProps } from "./types";
import "./movie.scss";

const MovieList: React.FC<movieListProps> = ({
  movieData,
  searchData,
  order,
}) => {
  const itemPerPage = 10;
  const [selectedPageId, setSelectedPageId] = useState(1);
  const [currentPageData, setCurrentPageData] = useState<any>([]);

  const handleChange = (event: any, value: number) => {
    setSelectedPageId(value);
  };

  const sortingData = useCallback(
    (movies: any) => {
      switch (order) {
        case "lowest":
          return movies.sort((a: any, b: any) =>
            parseInt(a.budget) > parseInt(b.budget) ? 1 : -1
          );
        case "highest":
          return movies.sort((a: any, b: any) =>
            parseInt(a.budget) < parseInt(b.budget) ? 1 : -1
          );
        case "latest":
          return movies.sort((a: any, b: any) => {
            var da = new Date(a.release_date).getTime();
            var db = new Date(b.release_date).getTime();
            return db - da;
          });
        case "earliest":
          return movies.sort((a: any, b: any) => {
            var da = new Date(a.release_date).getTime();
            var db = new Date(b.release_date).getTime();
            return da - db;
          });
      }
    },
    [order]
  );

  useEffect(() => {
    setSelectedPageId(1);
  }, [searchData]);

  useEffect(() => {
    const newMovies = movieData.filter((val) =>
      val.title.toLowerCase().includes(searchData.toLowerCase())
    );

    let listShow = [...newMovies];
    listShow = sortingData(listShow).splice(
      (selectedPageId - 1) * itemPerPage,
      itemPerPage
    );
    setCurrentPageData(listShow);
  }, [searchData, movieData, selectedPageId, sortingData]);

  const handleLike = (selectedMovie: any, selection: string) => {
    const index = currentPageData.findIndex(
      (movie: any) => movie.id === selectedMovie.id
    );

    const data = [...currentPageData];

    if (selection === "like") {
      data[index].like = !selectedMovie.like;
      data[index].dislike = false;
    } else {
      data[index].dislike = !selectedMovie.dislike;
      data[index].like = false;
    }

    setCurrentPageData(data);
  };

  return (
    <React.Fragment>
      <div className="product-list-main">
        {currentPageData.length > 0
          ? currentPageData.map((movie: any, index: any) => {
              let data = { ...movie };
              data.image = faker.image.cats(250, 250, true);
              return (
                <MovieCard movie={data} key={index} handleLike={handleLike} />
              );
            })
          : "Data Not Found."}
      </div>
      {currentPageData.length > 0 && (
        <Pagination
          count={Math.ceil(movieData.length / itemPerPage)}
          page={selectedPageId}
          onChange={handleChange}
        />
      )}
    </React.Fragment>
  );
};

export default MovieList;
