import React from "react";
import TablePagination from "@material-ui/core/TablePagination";



const Pagi = (props) => {
  
  return (
    <div>


      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 20]}
        count={props.totalCount}
        page={props.page}
        onChangePage={props.changePage}
        onChangeRowsPerPage={props.RowPerPage}
        rowsPerPage={props.rowsPerPage}

      />
    </div>
  );
};

export default Pagi;
