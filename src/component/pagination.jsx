import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import PropTypes from "prop-types";

const Pagi = (props) => {
  const { totalCount, page, changePage, onChangeRow, rowsPerPage } = props;

  return (
    <div>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 20]}
        count={totalCount}
        page={page}
        onChangePage={changePage}
        onChangeRowsPerPage={onChangeRow}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

Pagi.propTypes = {
  totalCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  onChangeRow: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
export default Pagi;
