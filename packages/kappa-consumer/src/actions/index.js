import * as ProductsListActions from '../pages/productsList/productsList.actions';
import * as ProductActions from '../pages/product/product.actions';
import * as CategoriesActions from './categories.actions';
import * as CartActions from './cart.actions';

const ActionCreators = {
  ...ProductsListActions,
  ...ProductActions,
  ...CategoriesActions,
  ...CartActions,
};

export default ActionCreators;
