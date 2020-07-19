import React, { useState, useEffect } from "react";
import MovieTable from "./movieTable";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { Paper, TableContainer } from "@material-ui/core";
import Pagination from "./pagination";
import { Paginate } from "../utils/paginates";
import TableSearch from "./TableSearch";
import TableFilter from "./TableFilter";
import Grid from "@material-ui/core/Grid";
import Layout from "../layout/Layout";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

// ===== CSS EDIT ===== //
const useStyles = makeStyles(() => ({
  gridValue: {
    marginTop: 20,
  },
}));

// ===== Main Movie Arrow Function Start ===== //
const Movies = () => {
  const [movie, setMovie] = useState({
    MovieData: [],
  });

  // ===== State Method ===== //
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [genre, setGenre] = useState([]);
  const [selectGenre, setSelectGenre] = useState([]);

  // ===== Handle FilterButton  =====//
  const handleFilterButton = (item) => {
    const checkSearchTerm = item.name === "All Genre" ? "" : item.name;
    setSearch(checkSearchTerm);
    setSelectGenre(item);
    setPage(0);
  };

  // ===== Handle Search  =====//
  const handleInputSearch = (event) => {
    setSearch(event.target.value);
    setPage(0);
  };

  // ===== Handle Table Page change  =====//
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // ===== Handle Change Row per page  =====//
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // ===== Handle Delete Button  =====//
  const handleDel = (del_id) => {
    const movieDel = movie.MovieData.filter((item) => item._id !== del_id);
    setMovie({ MovieData: movieDel });
  };

  // ===== Handle Like Button  =====//
  const handleLiked = (item) => {
    const likeArray = [...movie.MovieData];
    const index = likeArray.indexOf(item);
    likeArray[index] = { ...item };
    likeArray[index].like = !likeArray[index].like;
    setMovie({ MovieData: likeArray });
  };

  useEffect(() => {
    const allGenre = [{ name: "All Genre", id: "00000" }, ...getGenres()];
    setGenre(allGenre);
    setMovie({ MovieData: getMovies() });
  }, []);

  useEffect(() => {
    setFilterSearch(
      movie.MovieData.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.genre.name.toLowerCase().includes(search.toLowerCase()) ||
          item.numberInStock.toString().includes(search.toLowerCase())
      )
    );
  }, [search, movie.MovieData]);

  // ===== get active movies length =====//
  const getLength = filterSearch.length;

  // ===== Empty Rows for table  =====//
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, getLength - page * rowsPerPage);

  // ===== Pagination Login  =====//
  const newMoviesArray = Paginate(filterSearch, page, rowsPerPage);

  return (
    <Layout>
      <Alert severity="info">There are {getLength} Movie in DataBase</Alert>

      <Grid className={classes.gridValue} container spacing={2}>
        <Grid item xs={4}>
          <TableFilter
            genre={genre}
            filterButton={handleFilterButton}
            selectedGenre={selectGenre}
          />
        </Grid>

        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <TableSearch searchValue={search} onSearch={handleInputSearch} />
            <MovieTable
              newMoviesArray={newMoviesArray}
              handleLiked={handleLiked}
              handleDel={handleDel}
              emptyRows={emptyRows}
            />
            <Pagination
              totalCount={getLength}
              changePage={handleChangePage}
              onChangeRow={handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Movies;
