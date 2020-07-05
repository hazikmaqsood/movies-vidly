import React, { useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import Heart from "./Heart";
import Pagination from "./pagination";
import { Paginate } from "../utils/paginates";
import {
  Button,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const Movies = () => {
  const [movie, setMovie] = useState({
    MovieData: getMovies(),
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, movie.MovieData.length - page * rowsPerPage);

  const handleDel = (del_id) => {
    const movieDel = movie.MovieData.filter((item) => item._id !== del_id);
    setMovie({ MovieData: movieDel });
  };

  const handleLiked = (item) => {
    const likeArray = [...movie.MovieData];
    const index = likeArray.indexOf(item);
    likeArray[index] = { ...item };
    likeArray[index].like = !likeArray[index].like;
    setMovie({ MovieData: likeArray });
    console.log(likeArray);
  };

  if (movie.MovieData.length === 0)
    return <Alert severity="error">There are No Movies Here</Alert>;

  const newMoviesArray = Paginate(movie.MovieData, page, rowsPerPage);
  return (
    <TableContainer component={Paper}>
      <Alert severity="info">There are {movie.MovieData.length} Movie in DataBase</Alert>

      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Genre</TableCell>
            <TableCell align="center">Stock</TableCell>
            <TableCell align="center">Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newMoviesArray.map((item) => (
            <TableRow key={item._id}>
              <TableCell align="center">{item.title}</TableCell>
              <TableCell align="center">{item.genre.name}</TableCell>
              <TableCell align="center">{item.numberInStock}</TableCell>
              <TableCell align="center">{item.dailyRentalRate}</TableCell>
              <TableCell align="center">
                <Heart onLiked={() => handleLiked(item)} movies={item} />
              </TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDel(item._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 68 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination
        totalCount={movie.MovieData.length}
        changePage={handleChangePage}
        onChangeRow={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </TableContainer>
  );
};

export default Movies;
