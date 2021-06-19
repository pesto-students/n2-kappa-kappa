import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@kappa/components/src/atoms/iconButton';
import PaginationTable from '../../../../components/molecules/paginationTable';
import SettingsIcon from '../../../../assets/images/settings';

/* STYLES */
import useStyles from './categoriesTable.styles';

const CustomTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const CategoriesTable = (props) => {
  const classes = useStyles();

  const {
    categoryParams,
    openCategoryView,
    setCategoryFields,
    bodyData,
    setCategoryParams,
    fetching,
  } = props;
  const { page, limit } = categoryParams;

  const handleAction = (row) => {
    setCategoryFields(row);
    openCategoryView();
  };

  const handleChangeRowsPerPage = (event) => {
    setCategoryParams((prev) => ({ ...prev, limit: parseInt(event.target.value, 10) }));
    setCategoryParams((prev) => ({ ...prev, page: 1 }));
  };

  const handleChangePage = (event, newPage) => {
    setCategoryParams((prev) => ({ ...prev, page: newPage + 1 }));
  };

  return (
    <PaginationTable
      {...props}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      handleChangePage={handleChangePage}
      page={page}
      limit={limit}
      fetching={fetching}
    >
      {bodyData
      && (
        bodyData
          .data.data
          .slice(0, limit)
          .map((row) => (
            <CustomTableRow key={row._id}>
              <TableCell>{row._id.slice(0, 5)}</TableCell>
              <TableCell>{row.categoryName}</TableCell>
              <TableCell>{row.createdAt}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleAction(row)} className={classes.actionButton}>
                  <SettingsIcon />
                </IconButton>
              </TableCell>
            </CustomTableRow>
          )))}
    </PaginationTable>
  );
};

export default CategoriesTable;
