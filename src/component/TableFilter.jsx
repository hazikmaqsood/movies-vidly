import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const TableFilter = ({ genre, filterButton, selectedGenre }) => {
  return (
    <div>
      <Paper>
        <List component="nav" aria-label="main mailbox folders">
          {genre.map((item) => (
            <ListItem
              button
              key={item.name}
              onClick={() => filterButton(item)}
              selected={item === selectedGenre}
              disabled={selectedGenre === item}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};

export default TableFilter;
