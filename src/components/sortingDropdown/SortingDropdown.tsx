import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface ProductSortingProps {
  order: string;
  handleSorting: (value: string) => void;
}

const SortingDropdown: React.FC<ProductSortingProps> = ({
  order,
  handleSorting,
}) => {
  const handleChange = (event: any) => {
    handleSorting(event.target.value);
  };

  return (
    <FormControl size="small" className="mw-120">
      <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        value={order}
        label="Sorting"
        onChange={handleChange}
      >
        <MenuItem value="lowest">Lowest</MenuItem>
        <MenuItem value="highest">Highest</MenuItem>
        <MenuItem value="latest">Latest</MenuItem>
        <MenuItem value="earliest">Earliest</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortingDropdown;
