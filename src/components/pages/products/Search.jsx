import React from "react";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
const Search = ({ handleChange, value = "Search" }) => {
  return (
    <FormControl>
      <Input
        placeholder="Search"
        id="standard-adornment-weight"
        value={value}
        onChange={handleChange}
        endAdornment={<span class="material-icons">search</span>}
        aria-describedby="standard-weight-helper-text"
      />
    </FormControl>
  );
};

export default Search;
