import React from "react";
import TextField from "@material-ui/core/TextField";

const TableSearch = ({searchValue, onSearch}) => {
  return (
    <div>
      <TextField
        id="standard-basic"
        fullWidth
        variant="filled"
        label="Search "
        onChange={onSearch}
        value={searchValue}

      />
    </div>
  );
};

export default TableSearch;
