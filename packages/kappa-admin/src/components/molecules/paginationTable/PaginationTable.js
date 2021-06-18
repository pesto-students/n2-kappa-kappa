import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Loader from '@kappa/components/src/atoms/loader';

/* STYLES */
import useStyles from './paginationTable.styles';

const PaginationTable = (props) => {
  const classes = useStyles();

  const {
    fetching,
    headerData,
    bodyData,
    page,
    limit,
    handleChangePage,
    handleChangeRowsPerPage,
    children,
  } = props;

  return (
    <>
      <TableContainer component={Paper} className={classes.root}>
        <Table className={classes.table} size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {headerData.map((title) => (
                <TableCell>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {children}
          </TableBody>
        </Table>
      </TableContainer>

      {fetching
      ? (<Loader padding />)
      : (bodyData && 
        (
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={bodyData.total}
          rowsPerPage={limit}
          page={page - 1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      ))}
    </>
  );
};

export default PaginationTable;
