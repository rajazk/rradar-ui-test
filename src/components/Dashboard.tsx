import React, { useState } from "react";
import MovieList from "./movie/MovieList";
import SearchMovie from "./search/SearchMovie";
import SortingDropdown from "./sortingDropdown/SortingDropdown";
import { data } from "../utils/constants";

const Dashboard: React.FC = () => {
  const [query, setQuery] = useState("");
  const [order, setOrder] = useState("lowest");

  const handleChange = (data: string) => {
    setQuery(data);
  };

  const handleSorting = (value: any) => {
    setOrder(value);
  };

  return (
    <React.Fragment>
      <div className="topSection">
        <SearchMovie handleChange={handleChange} />
        <SortingDropdown order={order} handleSorting={handleSorting} />
      </div>
      <div className="loading-main">
        <MovieList searchData={query} movieData={data} order={order} />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
