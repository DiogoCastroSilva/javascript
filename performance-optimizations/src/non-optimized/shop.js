import { initProducts } from './product-management';

const addProduct = (e) => {
    import('./product-management').then(mod => {
        mod.addProduct(e);
    });
};

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
