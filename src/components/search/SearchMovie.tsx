import React from "react";
import { TextField } from "@mui/material";
import "./search-input.scss";

interface SearhMovieProps {
  handleChange: (text: string) => void;
}

const SearchMovie: React.FC<SearhMovieProps> = ({ handleChange }) => {
  return (
    <div className="search-input">
      <TextField
        name="search"
        placeholder="Search Movie"
        size="small"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchMovie;
