import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@kappa/components/src/atoms/iconButton';
import PaginationTable from '../../../../components/molecules/paginationTable';
import EditIcon from '../../../../assets/images/edit';
import CheckIcon from '../../../../assets/images/check';
import ClearIcon from '../../../../assets/images/clear';

/* STYLES */
import useStyles from './ordersTable.styles';

const CustomTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const OrdersTable = (props) => {
  const classes = useStyles();

  const {
    fetching,
    orderParams,
    openOrderView,
    setOrderFields,
    bodyData,
    setOrderParams,
  } = props;
  const { page, limit } = orderParams;

  const handleAction = (row) => {
    setOrderFields({
      isDelivered: row.isDelivered,
      orderId: row._id,
    });
    openOrderView();
  };

  const handleChangeRowsPerPage = (event) => {
    setOrderParams((prev) => ({ ...prev, limit: parseInt(event.target.value, 10), page: 1 }));
  };

  const handleChangePage = (event, newPage) => {
    setOrderParams((prev) => ({ ...prev, page: newPage + 1 }));
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
      {!fetching
      && bodyData.data.data
        .slice(0, limit)
        .map((row) => (
          <CustomTableRow key={row.id}>
            <TableCell>{row._id.slice(0, 5)}</TableCell>
            <TableCell>
              {row.isPaid
                ? <CheckIcon className={classes.positiveIcon} />
                : <ClearIcon className={classes.negativeIcon} />}
            </TableCell>
            <TableCell>
              {row.isDelivered
                ? <CheckIcon className={classes.positiveIcon} />
                : <ClearIcon className={classes.negativeIcon} />}
            </TableCell>
            <TableCell>
              $
              {row.totalPrice}
            </TableCell>
            <TableCell>{row.orderItems.length}</TableCell>
            <TableCell>
              <IconButton disabled={row.isDelivered} onClick={() => handleAction(row)} className={classes.actionButton}>
                <EditIcon />
              </IconButton>
            </TableCell>
          </CustomTableRow>
        ))}
    </PaginationTable>
  );
};

export default OrdersTable;
