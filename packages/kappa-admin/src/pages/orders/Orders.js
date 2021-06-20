import React, { useState, useEffect } from 'react';

/* COMPONENTS */
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import OrdersTable from './components/ordersTable';
import OrdersView from './components/ordersView';

/* STYLES */
import useStyles from './orders.styles';

/* UTILS */
import { getAllOrders, updateOrder } from '../../network/api';
import { ordersTableHeader } from '../../utils/constants';

/* ICONS */

const initialOrderFields = {
  isDelivered: '',
  orderId: '',
};

export default function Orders() {
  const classes = useStyles();

  const [fetching, setFetching] = useState(true);
  const [isOrderViewOpen, setIsOrderViewOpen] = useState(false);
  const [orders, setOrders] = useState(null);
  const [orderParams, setOrderParams] = useState({
    page: 1,
    limit: 10,
  });
  const [orderFields, setOrderFields] = useState(initialOrderFields);

  const handleOrderFields = (name) => (event) => {
      return setOrderFields({ ...orderFields, [name]: event.target.value });
  };

  useEffect(() => {
    setFetching(true);
    setOrders(null);
    getAllOrders(orderParams)
      .then((res) => {
        setOrders(res);
        setFetching(false);
      });
  }, [orderParams]);

  const openOrderView = () => {
    setIsOrderViewOpen(true);
  };

  const handleSubmit = () => {
    setIsOrderViewOpen(false);
    setFetching(true);
    updateOrder(orderFields.orderId)
      .then(() => {
        getAllOrders(orderParams)
          .then((res) => {
            setOrders(res);
            setOrderFields(initialOrderFields);
            setFetching(false);
        });
      });
  }

  return (
    <div className={classes.root}>
      <OrdersTable
        bodyData={orders}
        headerData={ordersTableHeader}
        orderParams={orderParams}
        setOrderParams={setOrderParams}
        openOrderView={openOrderView}
        setOrderFields={setOrderFields}
        fetching={fetching}
      />
      <OrdersView
        isOpen={isOrderViewOpen}
        setIsOpen={setIsOrderViewOpen}
        orderFields={orderFields}
        handleOrderFields={handleOrderFields}
        handleSubmit={handleSubmit}
        fetching={fetching}
      />
    </div>
  );
}
