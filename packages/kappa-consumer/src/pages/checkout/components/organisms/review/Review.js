import React, { useEffect, useState } from 'react';
import axios from 'axios';

/* COMPONENTS */
import Grid from '@kappa/components/src/atoms/grid';
// atoms
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import List from '@kappa/components/src/atoms/list';
import Box from '@kappa/components/src/atoms/box';
import DeleteIcon from '@material-ui/icons/Delete';

import Typography from '@kappa/components/src/atoms/typography';

// molecules
import QuantityButton from '../../../../../components/molecules/quantityButton';

/* STYLES */

import useStyles from './review.styles';

const Review = () => {
  let URL = 'http://localhost:5000';
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [countUpdate, setCountUpdate] = useState(false);
  const [calculation, setCalculation] = useState({ subTotal: 0, discount: 0 });

  useEffect(() => {
    let subTotal = 0;
    let discount = 0;

    axios.get(`${URL}/api/v1/cart/60b91c696807c4197c691214`).then((res) => {
      console.log(res.data.items, 'res');
      setData(res.data.items);

      // calculate
      res.data.items.forEach((elem) => {
        let subTotalTemp = elem.product.price * elem.quantity;

        let discountTemp =
          subTotalTemp - subTotalTemp * (elem.product.discount / 100);

        subTotal += subTotalTemp;
        discount += discountTemp;
      });

      setCalculation({ subTotal, discount });
      console.log(subTotal, 'subTotal', discount, 'discount');

      setCountUpdate(false);
    });
  }, [countUpdate]);

  const incrementProduct = (id, count) => {
    if (count < 10) {
      axios
        .put(`${URL}/api/v1/cart`, {
          user: '60b91c696807c4197c691214',
          itemId: id,
          type: 'inc',
        })
        .then((response) => {
          setCountUpdate(true);
          console.log(response, 'response');
        });
    }
  };

  const decrementProduct = (id, count) => {
    if (count > 1) {
      axios
        .put(`${URL}/api/v1/cart`, {
          user: '60b91c696807c4197c691214',
          itemId: id,
          type: 'dec',
        })
        .then((response) => {
          setCountUpdate(true);
          console.log(response, 'response');
        });
    }
  };

  return (
    <List width='100%' className={classes.scrollable} subheader={<li />}>
      {data.map((item) => {
        return (
          <Card key={item._id} className={classes.root}>
            <CardMedia
              className={classes.media}
              image={`${URL}/api/v1/files/${item.product.images[0]}`}
            />
            <CardContent>
              <Typography gutterBottom variant='body1' display={'block'}>
                {item.product.title}
              </Typography>
              <Typography variant='body1' display={'block'}>
                Price: <b> ${item.product.price}</b>
              </Typography>
            </CardContent>
            <QuantityButton
              className={{ borderRadius: '2px' }}
              quantity={item.quantity}
              incrementProduct={() => incrementProduct(item._id, item.quantity)}
              decrementProduct={() => decrementProduct(item._id, item.quantity)}
            />
            <Box className={classes.deleteIconContainer}>
              <DeleteIcon className={classes.deleteIcon} />
            </Box>
          </Card>
        );
      })}
    </List>
  );
};

export default Review;
