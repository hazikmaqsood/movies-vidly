import React from "react";
import { FavoriteBorder, Favorite } from "@material-ui/icons";

const Heart = (props) => {
  return (
    <div onClick={props.onLiked}>
      {props.movies.like ? <Favorite /> : <FavoriteBorder />}
    </div>
  );
};

export default Heart;
