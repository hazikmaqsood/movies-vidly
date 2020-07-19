import React from 'react';
import Heart from "./Heart";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from 'react-router-dom';
import {
    Button,
    TableRow,
    TableHead,
    TableCell,
    TableBody,
    Table,
  } from "@material-ui/core";

const MovieTable = ({newMoviesArray, handleLiked,handleDel,emptyRows}) => {
    return(
        <div>
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
                    <TableCell align="center"> <Link component={RouterLink} to={`/movie/${item._id}`}> {item.title} </Link> </TableCell>
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
        </div>
    )
}

export default MovieTable;