import _ from "lodash";

export const Paginate = (item, page, rowPerPage) => {
  return _(item)
    .slice(page * rowPerPage, page * rowPerPage + rowPerPage)
    .value();
};

// return item.slice(page * rowPerPage, page * rowPerPage + rowPerPage);
