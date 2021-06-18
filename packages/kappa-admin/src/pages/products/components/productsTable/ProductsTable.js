import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@kappa/components/src/atoms/iconButton';
import PaginationTable from '../../../../components/molecules/paginationTable';
import SettingsIcon from '../../../../assets/images/settings';

/* STYLES */
import useStyles from './productsTable.styles';

const CustomTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const ProductsTable = (props) => {
  const classes = useStyles();

  const {
    fetching,
    productParams,
    openProductView,
    setProductFields,
    bodyData,
    setProductParams,
  } = props;
  const { page, limit } = productParams;

  const handleAction = (row) => {
    setProductFields({
      category: row.category._id,
      countInStock: row.countInStock,
      discount: row.discount,
      priority: row.priority,
      description: row.description,
      price: row.price,
      title: row.title,
      _id: row._id,
      images: row.images
    });
    openProductView();
  };

  const handleChangeRowsPerPage = (event) => {
    setProductParams((prev) => ({ ...prev, limit: parseInt(event.target.value, 10), page: 1 }));
  };

  const handleChangePage = (event, newPage) => {
    setProductParams((prev) => ({ ...prev, page: newPage + 1 }));
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
      {!fetching && bodyData.data
        .slice(0, limit)
        .map((row) => (
          <CustomTableRow key={row.id}>
            <TableCell>{row.id.slice(0, 5)}</TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.price}</TableCell>
            <TableCell>{row.countInStock}</TableCell>
            <TableCell>{row.category && row.category.categoryName}</TableCell>
            <TableCell>{row.images && row.images.length}</TableCell>
            <TableCell>{row.discount}</TableCell>
            <TableCell>{row.priority}</TableCell>
            <TableCell>
              <IconButton onClick={() => handleAction(row)} className={classes.actionButton}>
                <SettingsIcon />
              </IconButton>
            </TableCell>
          </CustomTableRow>
        ))}
    </PaginationTable>
  );
};

export default ProductsTable;
