import { products } from './products';
import { renderProducts } from './rendering';

const addProduct = (e) => {
    import('./product-management').then(mod => {
        mod.addProduct(e);
    });
};

const deleteProd = (productId) => {
    import('./product-management').then(mod => {
        mod.deleteProduct(productId);
    });
};

export function initProducts() {
    renderProducts(products, deleteProd);
  }

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
