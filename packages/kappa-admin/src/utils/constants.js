/* ICONS */
// import dashboardIcon from '../assets/images/largeLayout';
import productsIcon from '../assets/images/products';
import shoppingCartIcon from '../assets/images/shoppingCart';
import categoryIcon from '../assets/images/category';

export const MENU = [
  // { name: 'Dashboard', route: '', icon: dashboardIcon },
  { name: 'orders', route: '', icon: shoppingCartIcon },
  { name: 'products', route: 'products', icon: productsIcon },
  { name: 'categories', route: 'categories', icon: categoryIcon },
];

export const productsTableHeader = ['Id', 'Name', 'Description',
  'Price', 'Priority', '#Quantity', 'Category', '#Image', 'Discount', 'Actions',
];

export const categoriesTableHeader = ['Id', 'Category Name', 'Active', 'Actions'];

export const ordersTableHeader = ['Id', 'Paid', 'Delivered', 'Total Amount', '#Items', 'Actions'];
