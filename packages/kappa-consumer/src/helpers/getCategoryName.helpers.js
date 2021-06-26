import get from '../utils/get.utils';

const getCategoryName = (productsInfo) => get(productsInfo, 'category.categoryName', '');

export default getCategoryName;
