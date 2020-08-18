const productListEl = document.getElementById('product-list');

function createElement(product, deleteProductFn) {
  const newListEl = document.createElement('li');
  newListEl.innerHTML = `
    <h2>${product.title}</h2>
    <p>${product.price}</p>
  `;

  const prodDeleteButtonEl = document.createElement('button');
  prodDeleteButtonEl.innerHTML = 'DELETE';

  newListEl.id = product.id;

  prodDeleteButtonEl.addEventListener(
    'click',
    deleteProductFn.bind(null, product.id)
  );

  newListEl.appendChild(prodDeleteButtonEl);

  return newListEl;
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = '';
  products.forEach(product => {
    productListEl.appendChild(createElement(product, deleteProductFn));
  });
}

export function updateProdutc(product, deletrProdFn, isAdding) {
  if (isAdding) {
    productListEl.appendChild(createElement(product, deletrProdFn));
  } else {
    const productElement = document.getElementById(product.id);
    productElement.parentElement.removeChild(productElement);
  }
}