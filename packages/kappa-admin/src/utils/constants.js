/* ICONS */
import dashboardIcon from '../assets/images/largeLayout';
import productsIcon from '../assets/images/products';
import shoppingCartIcon from '../assets/images/shoppingCart';
import categoryIcon from '../assets/images/category';

export const menu = [
  { name: 'Dashboard', route: 'dashboard', icon: dashboardIcon },
  { name: 'Products', route: 'products', icon: productsIcon },
  { name: 'Categories', route: 'categories', icon: categoryIcon },
  { name: 'Orders', route: 'orders', icon: shoppingCartIcon },
];

export const productsTableHeader = ['Id', 'Name', 'Description',
  'Price', 'Quantity', 'Category', '# Images', 'Discount',
  'Priority', 'Action',
];

export const categoriesTableHeader = ['Id', 'Category Name', 'Created At', 'Action'];
