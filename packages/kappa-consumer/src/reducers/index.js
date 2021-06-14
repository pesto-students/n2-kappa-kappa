import { combineReducers } from 'redux';

import {
  categoriesReducer,
} from './dataReducers';

export default combineReducers({
  products: categoriesReducer,
});
